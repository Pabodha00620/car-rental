import React from 'react';
import {Col} from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";


const ServiceList = () => {
  return(
    <>
    {servicesData.map ((item) => (
      <SerciveItem item={item} key={item.id} />
    ))}
    </>
  );
};

const ServiceItem = ({item}) => (
  <Col lg= "4" md="4" sm="6" className='mb=3'>
    <div className='service_item'>
      <span className='mb-3 d-inline-block'>
        <i class={item.icon}/>
      </span>
    </div>
  </Col>
)


