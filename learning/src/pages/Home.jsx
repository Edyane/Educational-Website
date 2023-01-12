import React, { Fragment } from 'react';
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import AboutUs from '../components/About-us/AboutUs';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
    </Fragment>
  );
}

export default Home