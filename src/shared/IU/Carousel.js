import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { PetsData } from "../../assets/PetsData";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import Modal from "./Modal";
import Card from "./Card";
import "./Carousel.css";

const PreviousBtn = (props) => {
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
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 799,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      },
    },
  ],
};
const Carousel = () => {
  const [pet, setPet] = useState({});
  const [show, setShow] = useState(false);
  const { width } = useWindowDimensions();

  const modalHandler = (x) => {
    const newItem = PetsData.find((item) => item.id === x);
    setPet(newItem);
    setShow(true);
  };
  const closeHandler = () => {
    setShow(false);
  };

  return (
    <div className="container">
      <Slider {...carouselProperties}>
        {/* <Card item={item} click={modalHandler} /> */}
        {PetsData.map((item) => (
          <Card key={item.id} id={item.id}>
            <img src={item.image} alt={item.name} />
            <p className="card-name">{item.name}</p>
            <button className="card-btn" onClick={() => modalHandler(item.id)}>
              Learn more
            </button>
          </Card>
        ))}
      </Slider>
      <Modal
        className={show && "show-modal"}
        Close={closeHandler}
        img={pet.image}
        name={pet.name}
        breed={pet.breed}
        desc={pet.desc}
        age={pet.age}
        inoculations={pet.inoculations}
        diseases={pet.diseases}
        parasites={pet.parasites}
      />
    </div>
  );
};

export default Carousel;
