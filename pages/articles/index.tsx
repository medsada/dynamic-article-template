import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { Article } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import List from "../../components/List";
import { Box, Flex,Heading,Text,HStack,Button,Container} from '@chakra-ui/react'

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

    <Container py='100px'>
      <Link href="/">
        <a>Go home</a>
      </Link>
    <Heading as='h1' fontSize ='32px' mb='32px' mt='12px'>Our Articles</Heading>
    {/* <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p> */}
    {/* <p>You are currently on:</p> */}
    <List items={items} />
    </Container>
   
   
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
