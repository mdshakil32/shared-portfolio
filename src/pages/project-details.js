import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const projectDetails = () => {
  const router = useRouter();
  console.log("router", router.pathname);
  return (
    <div>
      <Head>
        <title>Md Shakil Chowdhury</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden">
        <Header />

        <Footer />
      </main>
    </div>
  );
};

export default projectDetails;