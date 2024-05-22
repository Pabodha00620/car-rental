import React from 'react';
import Slider from "react-slick";

import "../../styles/Testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava02.jpg";
import ava03 from "../../assets/all-images/ava03.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings ={
    dots: true,
    Infinity: true,
    speed: 1000,
    swipeToSlide: true,
    audioplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
    ],
  };

  return(
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
        explicabo molestias recusandae repudiandae, dolor, sapiente placeat
        ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
        voluptate odit?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4"></div>
      </div>
    </Slider>
  )
}
