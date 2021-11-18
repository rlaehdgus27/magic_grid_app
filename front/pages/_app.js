import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import Theme from "../components/Theme";
import GlobalStyles from "../components/GlobalStyles";
import wrapper from "../store/configureStore";

const Magic = ({ Component }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Head>
          <title>MAGIC GRID</title>

          <meta name="subject" content="[[**4LEAF GEAR SAMPLE**]]" />
          <meta name="title" content="[[**4LEAF GEAR SAMPLE**]]" />
          <meta name="author" content="[[**4LEAF GEAR SAMPLE**]]" />
          <meta name="keywords" content="[[**4LEAF GEAR SAMPLE**]]" />
          <meta name="description" content="[[**4LEAF GEAR SAMPLE**]]" />
          {/* <!-- OG tag  --> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="[[**4LEAF GEAR SAMPLE**]]" />
          <meta property="og:site_name" content="[[**4LEAF GEAR SAMPLE**]]" />
          <meta property="og:url" content="https://www.sample.com/" />
          <meta property="og:description" content="[[**4LEAF GEAR SAMPLE**]]" />
          <meta property="og:keywords" content="[[**4LEAF GEAR SAMPLE**]]" />
          <meta property="og:image" content="/og_img.png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="400" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.sample.com" />
        </Head>
        <Component />
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(Magic);
