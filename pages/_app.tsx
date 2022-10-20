import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout";
import theme from '../theme';
import '../theme/style.css'
export default function myApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
