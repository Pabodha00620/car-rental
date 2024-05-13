import React from 'react'
import CommonSection from "../Components/UI/CommonSection";
import Helmet from '../Components/Helmet';
import AboutSection from '../Components/UI/AboutSection';
import { Container,Row, Col } from 'reactstrap';
import BecomeDriverSection from "../Components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../Components/UI/OurMembers";
import "../styles/about.css";


const About = () =>{
  return(
    <Helmet title ="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage"/>

      <section className='about_page-section'>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className='about_page-img'>
                <img src={driveImg} alt="" className='w-100 rounded-3'/>
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className='about_page-content'>
                <h2 className='section_title'>
                  Our Mission is to Offer Safe Ride Solutions
                </h2>

                <p className='section_description'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet veniam assumenda aperiam accusantium ex autem
                perferendis repellendus nostrum delectus. Nemo et dolore est
                tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className='d-flex align-items-center gap-3 mt-4'>
                  <span className='fs-4'>
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className='section_subtitle'>Need Any Help?</h6>
                    <h4>+94 770 252 522</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection/>

      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5 text-center'>
              <h6 className='section_subtitle'>Experts</h6>
              <h2 className='section_title'>Our Member</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
