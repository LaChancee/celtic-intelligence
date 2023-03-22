import { Html, Head, Main, NextScript } from 'next/document'
import Header from "@/pages/Component/Header";
import React from "react";
import Footer from "@/pages/Component/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <Header/>
      <body>
        <Main />
        <NextScript />
      </body>
        <Footer/>
    </Html>
  )
}
