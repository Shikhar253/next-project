import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Head from "next/head";
import Layout from "../components/Layout";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Head>
          <title>TIF TASK</title>
        </Head>
        <Header />
        <Features />
        <CTA />
        <Footer />
      </Layout>
    </QueryClientProvider>
  );
}
