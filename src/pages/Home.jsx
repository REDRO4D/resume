import React, { Fragment } from "react";
import Hero from "./../components/home/Hero";
import AboutMe from "./../components/home/AboutMe";
import Layout from "./../components/Layout";

const Home = () => {
  return (
    <Fragment>
      <Layout>
        <Hero />
        <AboutMe />
      </Layout>
    </Fragment>
  );
};

export default Home;
