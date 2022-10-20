import { GetStaticProps, GetStaticPaths } from "next";

import { Article } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import Template1 from "../../components/ArticleTemplate1";
import Template2 from "../../components/ArticleTemplate2";

type Props = {
  item?: Article;
  errors?: string;
};

const Article = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }
  let Template;
  switch (item.template_id) {
    case 1:
      Template = <Template1 item={item} />;
      break;
    case 2:
      Template = <Template2 item={item} />;
      break;
    default:
      Template = <Template1 item={item} />;
  }
  return <Layout title={item.title}>{item && Template}</Layout>;
};

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on most read articles
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ];
  // here we get path 1 and 2 statically but when new path is request it will fallback
  return { paths, fallback: true };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleUserData.find((data) => data.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
