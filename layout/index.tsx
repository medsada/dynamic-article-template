import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Fouter";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
