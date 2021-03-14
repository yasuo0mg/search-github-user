import React from "react";

import { NextPage } from "next";
import Head from "next/head";

import { MainContent } from "@components/organisms/MainContent";
import {
  CURRENT_URL,
  DESCRIPTION,
  PAGE_TITLE,
  PREVIEW_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
} from "@constants/seo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* Open Graph */}
        <meta charSet="utf-8" />
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={PAGE_TITLE} key="ogtitle" />
        <meta property="og:description" content={DESCRIPTION} key="ogdesc" />
        <meta property="og:url" content={CURRENT_URL} key="ogurl" />
        <meta property="og:image" content={PREVIEW_IMAGE} key="ogimage" />
        <meta property="og:site_name" content={SITE_NAME} key="ogsitename" />
        <meta property="og:title" content={PAGE_TITLE} key="ogtitle" />
        <meta property="og:description" content={DESCRIPTION} key="ogdesc" />
        {/* Twiiter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content={TWITTER_HANDLE} key="twhandle" />
        {/* Favicon Images */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4FD1C5" />

        <title>{PAGE_TITLE}</title>
      </Head>

      <MainContent />
    </>
  );
};

export default Home;
