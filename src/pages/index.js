import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { About } from "../components/about";
import { Blog } from "../components/blog-list";
import { OurLabelledTextbox } from "../components/textbox";
import { Button } from "../components/button";
import { CollapsibleCard } from "../components/collapsableCard";


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
      <Button buttonText="Click Me!"></Button>
      <CollapsibleCard frontText="Hello! (Click Me)" backText="This was hidden!"></CollapsibleCard>
      <Blog allPostsData={allPostsData} />
    </Layout>
  );
}
