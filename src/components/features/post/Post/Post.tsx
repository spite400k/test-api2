import { PostType } from '@/types/post';
import { PostBody } from './PostBody';
import { PostHeader } from './PostHeader';

type Props = {
  post: PostType;
};

export const Post: React.VFC<Props> = ({ post }) => {
  const { title, thumbnail, releaseDate, tags, markdown } = post;

  return (
    <div className="p-8 bg-primary-1">
      <PostHeader
        title={title}
        thumbnail={thumbnail.url}
        releaseDate={releaseDate}
        tags={tags}
      />
      <PostBody content={markdown || ""} />
    </div>
  );
};
