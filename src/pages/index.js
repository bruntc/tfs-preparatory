import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { About } from "../components/about";
import { Blog } from "../components/blog-list";
import { OurLabelledTextbox } from "../components/textbox";



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <About />
      <OurLabelledTextbox defaultText='Default text' label='Label title'/>
      <Blog allPostsData={allPostsData} />
    </Layout>
  );
}
