import { Key } from 'react';
import { FaChevronRight } from 'react-icons/fa';

export type Props = 
  {
    lists:(
    {
      string: string;
      path: string;
    } | {
        string: string;
    }
    )[]
};

// export const BreadCrumbs = (lists: ({ string: string; path: string; } | { string: string; })[]) => {
export const BreadCrumbs: React.VFC<Props> = (props) => {

  const lists = props.lists;

  if (!lists) {
    return <></>;
  }

  return (
    <div>
      <ol
        className="flex font-normal overflow-x-auto whitespace-nowrap"
        aria-label="breadcrumb"
      >
        {lists.map(({ string, path }: any, index: Key | null | undefined) => (
          <li className="flex items-center text-gray-400 " key={index}>
            {lists.length - 1 !== index ? (
              <>
                <a className="text-xs no-underline" href={path}>
                  {string}
                </a>
                <FaChevronRight aria-hidden="true" className="text-xs mx-2" />
              </>
            ) : (
              <span className="text-xs" aria-current="page">
                {string}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
