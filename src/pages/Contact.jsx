import React from 'react';

import {Link} from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Helmet from '../Components/Helmet';
import CommonSection from '../Components/UI/CommonSection';
import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line"
  },

  {
    url: "#",
    icon: "ri-instagram-line"
  },

  {
    url: "#",
    icon: "ri-linkedin-line"
  },

  {
    url: "#",
    icon: "ri-twitter-line"
  },
];

const Contact = () => {
  return (
    <Helmet title = "Contact">
      <CommonSection title = "Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className='fw-bold mb-4'>Get In Touch</h6>

              <Form>
                <FormGroup className='contact_form'>
                  <Input placeholder='Your Name' type='text' />
                </FormGroup>
                <FormGroup className='contact_form'>
                  <Input placeholder='Email' type='email' />
                </FormGroup>
                <FormGroup className='contact_from'>
                  <textarea
                  rows="5"
                  placeholder='Message'
                  className='textarea'></textarea>
                </FormGroup>

                <button className='contact_btn' type='submit'>
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className='contact_info'>
                <h6 className='fw-bold'>Contact Information</h6>
                <p className='section_description mb-0'>
                  123 Colombo 06
                  </p>
                  
                  <div className='d-flex align-item-center gap-2'>
                    <h6 className='fs-6 mb-0'>Phone:</h6>
                    <p className='section_description mb-0'>+94 772 586 425</p>
              </div>

              <div className='d-flex align-items-center gap-2'>
                <h6 className='mb-0 fs-6'>Email:</h6>
                <p className='section_description mb-0'>info@colombo.com</p>
              </div>

              <h6 className='fw-bold mt-4'>Follow Us</h6>

              <div className='d-flex align-items-center gap-4 mt-3'>
                {socialLinks.map ((item, index) =>(
                  <Link
                  to={item.url}
                  key={index}
                  className="social_link-icon">
                    <i class={item.icon}></i>
                    </Link>
                ))}

              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;