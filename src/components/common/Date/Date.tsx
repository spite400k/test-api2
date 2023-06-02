import { Timestamp } from 'firebase/firestore';
import { RiTimeFill } from 'react-icons/ri';
import { formatDate } from '@/lib/date';

type Props = {
  date: Timestamp;
};

export const Date: React.VFC<Props> = ({ date }) => (
  <div className="select-none hstack gap-2 text-md font-medium text-accent-1">
    <RiTimeFill />
    {formatDate(date)}
  </div>
);
