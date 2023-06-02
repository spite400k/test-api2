import ReactMarkdown from "react-markdown";
import markdownStyles from './styles/markdown-styles.module.css';
type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  console.log("PostBody ")
  console.dir(content);
  return (
    <div className="post">
      <div
        className={markdownStyles['markdown']}>
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
