import { Article } from "../interfaces";

type ListDetailProps = {
  item: Article;
};

const ArticleTemplate2 = ({ item: article }: ListDetailProps) => (
  <div>
    <h1>Detail for {article.title} by template 2</h1>
    <p>ID: {article.id}</p>
  </div>
);

export default ArticleTemplate2;
