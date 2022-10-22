import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Fouter";
import { Box} from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
};
const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Box minH='100vh' p='0px'>
    {children}
    </Box>
    <Footer />
  </>
);

export default Layout;
