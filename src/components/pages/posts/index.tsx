import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import { MainLayout } from '@/components/features/app/Layout';
import { Loading } from '@/components/features/app/Loading';
import { Profile } from '@/components/features/app/Profile';
import { Post } from '@/components/features/post/Post';
import { Share } from '@/components/features/post/Share';
import { Toc } from '@/components/features/post/Toc';
import { fetcher } from '@/components/shared/utils/fetch';
import { ROOT_URL } from '@/config/app';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { joinPath } from '@/lib/joinPath';
import { PostType } from '@/types/post';


type Params = {
    slug: string;
};



export const Posts: React.VFC<Params> = (params: Params) => {

  const lg = useBreakPoint('lg');
  const { data, error } = useSWR(`/api/post/slug/`+params.slug, fetcher)
 
  // データに応じた処理
  if (error) return <div>failed to load</div>
  if (!data) return <Loading/>
 
  console.log('data', data)
  const post:PostType = data;
  

  const imageURL = joinPath(ROOT_URL, post ? post.ogImage.url : "/dog.png");
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          url: ROOT_URL,
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: imageURL,
            },
          ],
        }}
      />
      <MainLayout
        main={
          <article>
            <Post post={post} />
          </article>
        }
        aside={
          <div className="vstack gap-10 h-full">
            <Profile />
            <div className="vstack gap-10 sticky top-20">
              {lg && <Toc />}
              <Share post={post} />
            </div>
          </div>
        }
        hamburgerMenu={
          <div
            role="button"
            tabIndex={0}
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Escape' }),
              )
            }
            onKeyDown={() => {}}
            className="overflow-y-auto cursor-default"
          >
            <Toc />
          </div>
        }
      />
    </>
  );
};

