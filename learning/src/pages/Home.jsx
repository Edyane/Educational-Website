import React, { Fragment } from 'react';
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import AboutUs from '../components/About-us/AboutUs';
import Courses from '../components/Courses-section/Courses';
import ChooseUs from "../components/Choose-us/ChooseUs";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <ChooseUs />
    </Fragment>
  );
}

export default Home