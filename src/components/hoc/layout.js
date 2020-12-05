import React from "react";
import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
