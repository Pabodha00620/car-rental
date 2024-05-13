import React from 'react';

import HeroSlider from "../Components/UI/HeroSlider";
import Helmet  from '../Components/Helmet';


import { Container, Row, Col } from 'reactstrap';
import FindCarForm from "../Components/UI/FindCardForm";
import AboutSection from '../Components/UI/AboutSection';
import ServicesList from '../Components/UI/ServicesList';
import carDate from '../assets/data/carData';
import CarItem from '../Components/UI/CarItem';
import BecomeDriverSection from '../Components/UI/BecomeDriverSection';
import Testimonial from '../Components/UI/Testimonial';

import BlogList from '../Components/UI/BlogList';

const Home = () =>{
  return(
    <Helmet title="Home">
      <section className='p-0 hero_slider-section'>
        <HeroSlider/>

        <div className='hero_form'>
          <Container>
            <Row className='form_row'>
              <Col lg="4" md="4">
                <div className='find_cars-left'>
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm/>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <AboutSection/>

      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5 text-center'>
              <h6 className='section_subtitle'>See our</h6>
              <h2 className='section_title'>Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className='text-center mb-5'>
              <h6 className='section_subtitle'>Come with</h6>
              <h2 className='section_title'>Hot Offers</h2>
            </Col>

            {carDate.slice(0,6).map((item) => (
              <CarItem item={item} key={item.id}/>
            ))}
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-4 text-center'>
              <h6 className='section_subtitle'>Our Clients says</h6>
              <h2 className='section_title'>Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5 text-center'>
              <h6 className='section_subtitle'>Explore our blogs</h6>
              <h2 className='section_title'>Latest Blogs</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
