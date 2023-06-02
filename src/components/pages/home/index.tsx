import { RiChatNewLine } from 'react-icons/ri';
import useSWR from 'swr';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Loading } from '@/components/features/app/Loading';
import { Profile } from '@/components/features/app/Profile';
import { Stories } from '@/components/features/story/Stories';
import { fetcher } from '@/components/shared/utils/fetch';
import { PostType } from '@/types/post';

export const Home: React.VFC = () => {

    const { data, error } = useSWR(`/api/post/`, fetcher)
 
  // データに応じた処理
  if (error) return <div>failed to load</div>
  if (!data) return <Loading/>
 
  console.log('data', data)
  const posts:PostType[] = data;

  return (
    <MainLayout
      main={
        <div className="vstack gap-12 p-8 bg-primary-1">
          <Stories posts={posts} title="最新の記事" icon={<RiChatNewLine />} />
          <Link href="/" passHref>
            <a className="button">
              記事一覧へ
            </a>
          </Link>
        </div>
      }
      aside={<Profile />}
    />
  );
};