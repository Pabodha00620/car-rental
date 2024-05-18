import React from 'react';
import {Col} from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";


const ServiceList = () => {
  return(
    <>
    {servicesData.map ((item) => (
      <Sercive></Sercive>
    ))}
    </>
  )
}
