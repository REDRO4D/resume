import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Fragment>
      <Layout>
        <Hero />
      </Layout>
    </Fragment>
  );
};

export default Home;
