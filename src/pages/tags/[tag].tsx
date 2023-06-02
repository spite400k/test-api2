import { Tag } from '@/components/pages/tag';

type Props = React.ComponentPropsWithoutRef<typeof Tag>;

const View: React.VFC<Props> = (props: Props) => <Tag {...props} />;

export default View;


// export const getStaticProps = async ({ params }: Params) => {
//   const posts = getAllPosts([
//     'title',
//     'releaseDate',
//     'slug',
//     'thumbnail',
//     'excerpt',
//     'tags',
//   ]).filter((post) => post.tags?.includes(params.tag));

//   return {
//     props: { posts },
//   };
// };

// export async function getStaticPaths() {
//   const tags = getAllPosts(['tags']).flatMap((post) => post.tags);

//   return {
//     paths: tags.map((tag) => {
//       return {
//         params: {
//           tag,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
