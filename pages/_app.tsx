import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout";

export default function myApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
