import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { Form } from "../components/registration-form";

//  name is important getServerSideProps
// props means properties
// export async function getStaticProps() {
//     return {
//       props: {
//         allPostsData,
//       },
//     };
//   }


export default function Register() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Form formData={{name: "one: ", defaultText: "default"}} />
      <Form formData={{name: "two: ", defaultText: "default"}} />
    </Layout>
  );
}


// set up database with fastify