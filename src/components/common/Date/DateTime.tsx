import { Timestamp } from 'firebase/firestore';
import { RiTimeFill } from 'react-icons/ri';

type Props = {
  date: Timestamp;
};

export const DateTime: React.VFC<Props> = ({ date }) => (
  <div className="select-none hstack gap-2 text-md font-medium text-accent-1">
    <RiTimeFill />
    {/* {formatDateTime(date)} */}
    {date}
  </div>
);
