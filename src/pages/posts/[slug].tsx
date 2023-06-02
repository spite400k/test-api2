import { useRouter } from 'next/router';
import { Posts } from '@/components/pages/posts';

type Props = React.ComponentPropsWithoutRef<typeof Posts>;

const View: React.VFC<Props> = (props: Props) => {
  const router = useRouter()
  const slug1  = router.query.slug as string || "";
  // console.log("0 View ")
  // console.dir(slug1);
  // console.log(slug1);
  
  return (
    <Posts slug={slug1} />
    )
};

export default View;

type Params = {
  params: {
    slug: string;
  };
};
// export async function get({ params }: Params) {
//  const router = useRouter()
//  const slug = router.query.slug
//   console.log("slugtsx ")
//   console.dir(slug);
//   const post = getPostBySlug(params.slug, [
//     'title',
//     'releaseDate',
//     'slug',
//     'author',
//     'content',
//     'ogImage',
//     'thumbnail',
//     'excerpt',
//     'tags',
//   ]);
//   const content = await markdownToHtml(post.markdown || '');

//   return {
//     props: {
//       // post: {
//       //   ...post,
//       //   content,
//       // },
//       params
//     },
//   };
// }
// export async function get({ params }: Params) {
//  const router = useRouter()
//  const slug = router.query.slug
//   console.log("slugtsx ")
//   console.dir(slug);
//   const post = getPostBySlug(params.slug, [
//     'title',
//     'releaseDate',
//     'slug',
//     'author',
//     'content',
//     'ogImage',
//     'thumbnail',
//     'excerpt',
//     'tags',
//   ]);
//   const content = await markdownToHtml(post.markdown || '');

//   return {
//     props: {
//       // post: {
//       //   ...post,
//       //   content,
//       // },
//       params
//     },
//   };
// }

// export async function getStaticPaths() {
//   const posts = getAllPosts(['slug']);

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
