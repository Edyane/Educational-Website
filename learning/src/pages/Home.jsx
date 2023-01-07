import React, { Fragment } from 'react';
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-section/HeroSection";
import CompanySection from "../components/Company-section/Company";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
    </Fragment>
  );
}

export default Home