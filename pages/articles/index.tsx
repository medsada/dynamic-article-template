import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { Article } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import List from "../../components/List";

type Props = {
  items: Article[];
};

const Articles = ({ items }: Props) => (
  <>
    <Head>
      <title>Articles List | Next.js + TypeScript Example</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <h1>Articles List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /articles</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Article[] = sampleUserData;
  return { props: { items } };
};

export default Articles;
