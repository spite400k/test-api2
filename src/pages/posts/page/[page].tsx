import { Page } from '@/components/pages/page';

type Props = React.ComponentPropsWithoutRef<typeof Page>;

const View: React.VFC<Props> = (props: Props) => <Page {...props} />;

export default View;


// export const getStaticProps = async ({ params }: Params) => {
//     console.log("pagetsx ")
//   console.dir(params);
//   const page = Number(params.page);

//   const posts = getAllPosts([
//     'title',
//     'releaseDate',
//     'slug',
//     'thumbnail',
//     'excerpt',
//   ]).slice((page - 1) * paginationOffset, page * paginationOffset);

//   return {
//     props: { posts, maxPage: getMaxPage() },
//   };
// };

// export async function getStaticPaths() {
//   const pages = Array.from({
//     length: getMaxPage(),
//   }).map((_, idx) => (idx + 1).toString());

//   return {
//     paths: pages.map((page) => {
//       return {
//         params: {
//           page,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
