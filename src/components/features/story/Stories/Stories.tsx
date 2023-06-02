import { PostType } from '@/types/post';
import { Story } from './Story';

type Props = {
  posts: PostType[];
  icon?: React.ReactElement;
  title: React.ReactNode;
};

export const Stories = ({ posts, icon, title }: Props) => {
// console.log("5 Stories posts ")
// console.dir(posts);

  return (
    <section>
      <div className="vstack gap-8">
        <h2 className="hstack gap-2 text-primary-1 text-3xl font-normal tracking-tighter leading-tight">
          {icon} {title}
        </h2>
        <div className="grid grid-cols-1 gap-10">
          {posts.map((post) => (
            <Story
              key={post.slug}
              title={post.title}
              thumbnail={post.thumbnail}
              releaseDate={post.releaseDate}
              slug={post.slug}
              excerpt={post.excerpt}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
