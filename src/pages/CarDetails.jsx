import React, {useEffect}from 'react';

import carData from "../assets/data/carData";
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../Components/Helmet';
import { useParams } from 'react-router-dom';
import BookingForm from "../Components/UI/BookingForm";
import PaymentMethod from "../Components/UI/PaymentMethos";

const CarDetails = () =>{
  const {slug} = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [singleCarItem]);

  return(
    <Helmet title={singleCarItem.carName}>
      <Section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className='w-100' />
            </Col>

            <Col lg="6">
              <div className='car_info'>
                <h2 className='section_title'>{singleCarItem.carName}</h2>

                <div className='d-flex align-items-center gap-5 mb-4 mt-3'>
                  <h6 className='rent_price fw-bold fs-4'>
                    ${singleCarItem.price}.00 / Day
                  </h6>
                  <span className='d-flex align-items-center gap-2'>
                    <span style={{color: "#f9a826"}}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} rating)
                  </span>
                </div>

                <p className='section_description'>
                  {singleCarItem.description}
                </p>
              </div>

              <div className='d-flex align-item-center mt-3'
              style={{ columnGap: "4rem"}}>
                <span className='d-flex align-items-center gap-1 section_description'>
                  <i
                  class="ri-roadster-line"
                  style={{color: "#f9a826"}}>
                  </i>{""}
                  {singleCarItem}
                </span>

                <span className='d-flex align-item-center gap-1 section_description'>
                  <i
                  class="ri-timer-flash-line"
                  style={{color: "#f9a826"}}> {" "}
                  </i>
                  {singleCarItem.speed}  
                </span>
              </div>

              <div className='d-flex align-items-center mt-3'
              style={{columnGap: "2.8rem"}}>

                <span className='d-flex align-items-center gap-1 section_description'>
                  <i class= "ri-map-pin-line" style={{color: "#f9a826"}}></i> {" "}
                  {singleCarItem.gps}
                </span>

                <span className='d-flex align-items-center gap-1 section_description'>
                  <i 
                  class="ri-building-2-line"
                  style={{color: "#f9a826"}}></i>{" "}
                  {singleCarItem.brand}
                </span>
              </div>
            </Col>

            <Col lg="7" className='mt-5'>
              <div className='booking-info mt-5'>
                <h5 className='mb-4 fw-bold'>Booking Information</h5>
                <BookingForm />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Helmet>
  );
};

export default CarDetails;