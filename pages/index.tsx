import type { GetServerSideProps, NextPage } from "next";
import { Vision } from "../sections/Vision";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { Navbar } from "../sections/Navbar";
import { Solutions } from "../sections/Solutions";
import { Subscribe } from "../sections/Subscribe";
import { TopBar } from "../sections/TopBar";
import { INITIAL_LANG, LANG_COOKIE } from "../utils/constants";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <Hero />
      </div>
      <Solutions />
      <Subscribe />
      <Vision />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let initialLang = ctx.req.cookies[LANG_COOKIE] || INITIAL_LANG;
  if (!["en", "fr"].includes(initialLang)) initialLang = INITIAL_LANG;
  return { props: { initialLang } };
};

export default Home;
