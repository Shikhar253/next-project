import Head from "next/head";
import Layout from "../components/Layout";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TIF TASK</title>
      </Head>
      <Header />
      <Features />
      <CTA />
      <Footer />
    </Layout>
  );
}
