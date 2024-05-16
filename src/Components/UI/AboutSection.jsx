import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({aboutClass}) => {
  return (
    <section className='about_section'
    style={
      aboutClass === "aboutPage"
      ? {marginTop: "0px"}
      : {marginTop: "280px"}
    }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className='about_section-content'>
              <h4 className='section_subtitle'>About Us</h4>
              <h4 className='section_title'>Welcome to car rent service</h4>
              <p className='section_description'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.

              </p>

              <div className='about_section-item d-flex align-items-center'>
                <p className='section_description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>

                <p className='section_description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-cricle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className='about_section-item d-flex align-items-center'>
                <p className='section_description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className='section_description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className='about_img'>
              <img src={aboutImg} alt="" className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
