import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Descripion from "../components/Description";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      {" "}
      <Header />
      <Steps />
      <Descripion />
      <Testimonials />
    </div>
  );
};

export default Home;
