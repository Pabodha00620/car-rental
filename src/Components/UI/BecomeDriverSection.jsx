import React from 'react';

import "../../styles/become-driver.css";
import { Container, Row, Col } from 'reactstrap';

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () =>{
  return (
    <section className='become_driver'>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className='become_driver-img'>
            <img src={driverImg} alt="" className='w-100' />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className='section_title become_driver-title'>
              Do You Want to Earn with Us? So Don't be Late
            </h2>

            <button className='btn become_driver-btn mt-4'>
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
