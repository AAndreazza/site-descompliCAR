import React, { Component } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/banner2.png'
import img2 from '../images/banner3.png'
import img3 from '../images/banner4.png'

const SliderSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
      };

    return (
        <div className="slider-container mt-10 sm:mt-20 mx-10 sm:mx-20">
            <Slider {...settings}>
                <div className="px-1 sm:px-2">
                    <img src={img1} alt=' ' />
                </div>
                <div className="px-1 sm:px-2">
                    <img src={img2} alt=' ' />
                </div>
                <div className="px-1 sm:px-2">
                    <img src={img3} alt=' ' />
                </div>
                
            </Slider>
        </div>

    )
}

export default SliderSection