import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img1.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> <span className="learn__text">Learn</span> on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="search__btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" height="300" width="300" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;