import React, {useEffect}from 'react';

import carData from "../assets/data/carData";
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../Components/Helmet';
import { useParams } from 'react-router-dom';
import BookingForm from "../Components/UI/BookingForm";
import PaymentMethod from "../Components/UI/PaymentMethos";

const CarDetails = () =>{
  const {slug} = useParams();

  const singleCarItem = carData.find((item) => item.carName ===);

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
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Helmet>
  )
}

