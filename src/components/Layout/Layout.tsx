import React, { type ReactNode } from "react";
import ScrollTop from "../ScrollTop/ScrollTop.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import ReturnHome from "../ReturnHome/ReturnHome.js";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  return (
    <>
      <Header />
      <ScrollTop />
      <main>{children}</main>
      {location.pathname !== "/" && <ReturnHome />}
      <Footer />
    </>
  );
}

export default Layout;
