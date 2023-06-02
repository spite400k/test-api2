import fs from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';
import { paginationOffset } from '@/config/pagination';
import { PostType } from '@/types/post';


const postsDirectory = resolve(process.cwd(), '_posts');

export const getPostSlugs = () => fs.readdirSync(postsDirectory);
// export const getPostSlugs = () => useFireStore<PostType>('post');


export const getMaxPage = () => {
  // const postNum = getPostSlugs().data.length;
  const postNum = getPostSlugs().length;
  return Math.ceil(postNum / paginationOffset);
};

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = resolve(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items as Partial<PostType>;
};

type Field = keyof PostType;

export const getAllPosts = (fields: Field[] = []) => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.releaseDate! > post2.releaseDate! ? -1 : 1));
  return posts;
};
