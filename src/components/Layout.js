import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = props => {
  return (
    <section style={{ width: "50vw", margin: "0px auto" }}>
      <NavBar />
      <Header text="Contax" />
      <main>{props.children}</main>
      <Footer text="Contax FED Training Week 2 Homework" />
    </section>
  );
};

export default Layout;
