import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { PetsData } from "../../assets/PetsData";
import Card from "./Card";
import "./Carousel.css";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="carousel-btn-wrapper left-btn">
        <FaLongArrowAltLeft style={{ color: "#292929", fontSize: "20px" }} />
      </div>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="carousel-btn-wrapper right-btn">
        <FaLongArrowAltRight style={{ color: "#292929", fontSize: "20px" }} />
      </div>
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  className: "slide",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    // {
    //   breakpoint: 1025,
    //   settings: {
    //     slidesToShow: 3,
    //     centerMode: false,
    //     slidesToScroll: 3,
    //   },
    // },
  ],
};
const Carousel = () => {
  return (
    <div className="container">
      <Slider {...carouselProperties}>
        {PetsData.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt={item.name} />
            <p className="card-name">{item.name}</p>
            <button className="card-btn">Learn more</button>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
