import React from 'react';
import {Col} from "reactstrap";
import {Link} from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const {imgUrl, model, carName, automatic, speed, price} = props.item;

  return(
    <Col lg="4" md="4" sm="6" className='md-5'>
      <div className='car_item'>
        <div className='car_img'>
          <img src={imgUrl} alt="" className='w-100' />
        </div>

        <div className='car_item-content mt-4'>
          <h4 className='section_title text-center'>{carName}</h4>
          <h6 className='rent_price text-center mt-'>
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className='car_item-info d-flex align-items-center justify-content-between mt-3 mb-4'>
            <span className='d-flex align-items-center gap-1'>
              <i class="ri-car-line"></i> {model}
            </span>
          </div>
        </div>
      </div>
    </Col>
  )
}
