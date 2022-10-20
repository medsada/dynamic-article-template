import { ChakraProvider } from "@chakra-ui/react";

export default function myApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
