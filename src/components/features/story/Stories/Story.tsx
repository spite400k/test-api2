import { Timestamp } from 'firebase/firestore';
import { DateTime } from '@/components/common/Date/DateTime';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { StorageObject } from '@/components/storage/types/obj';

type Props = {
  title: string;
  thumbnail?: StorageObject;
  releaseDate: Timestamp;
  excerpt: string;
  slug: string;
  category?: string;
};

export const Story = ({ title, thumbnail, releaseDate, excerpt, slug, category }: Props) => {
  // console.log("1 Story ")
   console.dir(slug);
    // console.dir(`/posts/${slug}`);
  return (
    <Link href={`/posts/${slug}`} passHref>
      <a className="select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ">
        <div className="center w-full md:w-1/3 h-52 md:h-full bg-neutral-50 md:bg-transparent">
          <Image
            src={thumbnail ? thumbnail.url : '/dog.png'}
            alt={`thumbnail for ${title}`}
            className="w-full max-w-xs h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1">
          <div className="md:flex justify-between">
            <DateTime date={releaseDate} />
            <div className='border-2 p-2 rounded-lg'> {category ? category : 'カテゴリーなし'}</div>
          </div>
          
          <h3 className="text-primary-1 text-xl font-medium">{title}</h3>
          <p className="text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3">
            {excerpt}
          </p>
        </div>

      </a>
    </Link>
  );
};
