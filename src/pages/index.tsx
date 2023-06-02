import { Home } from '@/components/pages/home';

type Props = React.ComponentPropsWithoutRef<typeof Home>;

const View: React.VFC<Props> = (props: Props) => <Home {...props} />;

export default View;

// export const getStaticProps = async () => {
//   // export const get = async () => {
//   const posts = (await getAllPosts([
//     'title',
//     'releaseDate',
//     'slug',
//     'thumbnail',
//     'excerpt',
//   // ])).slice(0, 4);
//   ]));
//   return {
//     props: { posts },
//   };
// };
