import Head from "next/head";
import Navbar from "./layouts/Navbar";
import Hero from "./features/Hero";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hollow Project Website</title>
        <meta
          name="description"
          content="Hollow Project Company Profile Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
