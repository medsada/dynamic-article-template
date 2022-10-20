import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Article } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Template1 from "../../components/ArticleTemplate1";
import Template2 from "../../components/ArticleTemplate2";

type Props = {
  item?: Article;
  errors?: string;
};

const Article = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <>
        <Head>
          <title>Error | Next.js + TypeScript Example</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </>
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
  return (
    <>
      <Head>
        <title>{item.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {item && Template}
    </>
  );
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
