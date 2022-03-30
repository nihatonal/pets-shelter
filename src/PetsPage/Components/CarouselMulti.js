import React, { useState, useEffect } from "react";

import { PetsData } from "../../assets/PetsData";
import Card from "../../shared/IU/Card";
import Modal from '../../shared/IU/Modal';
import {useWindowDimensions} from "../../shared/hooks/useWindowDimensions";
import "./CarouselMulti.css";


const CarouselMulti = () => {
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage, setpostPerPage] = useState(8);
  const [show, setShow] = useState(false);
  const [pet, setPet] = useState({});
  const { width } = useWindowDimensions();

 
  useEffect(() => {
    setPost(PetsData);
    if(width > 800) {
      setpostPerPage(8)
    }
    if(width < 800) {
      setpostPerPage(6)
    } 
    if(width < 375) {
      setpostPerPage(3)
    }
  }, [width]);

  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  console.log();

  const modalHandler = (x) => {
    const newItem = PetsData.find((item) => item.id === x);
    setShow(true)
    setPet(newItem);

  };
  const closeHandler = () => {
    setShow(false);
  };

  return (
    <div className="carousel_container">
      <div className="carousel-slider">
        {currentPost.map((Val) => {
          return (
            <Card key={Val.id} id={Val.id} className="carousel-multi-card">
              <img className="card-image" src={Val.image} alt={Val.name} />
              <p className="card-name">{Val.name}</p>
              <button
                className="card-btn"
                onClick={() => modalHandler(Val.id)}
              >
                Learn more
              </button>
            </Card>
          );
        })}
      </div>

      <div className="buttons-wrapper">
        <button
          className={
            number <= 1
              ? "carousel-btn-wrapper inactive"
              : "carousel-btn-wrapper"
          }
          onClick={() => setNumber(1)}
          disabled={number < 1}
        >
          &lt;&lt;
        </button>
        <button
          className={
            number <= 1
              ? "carousel-btn-wrapper inactive"
              : "carousel-btn-wrapper"
          }
          onClick={() => setNumber(number - 1)}
          disabled={number < 2}
        >
          &lt;
        </button>
        <div
          className="carousel-btn-wrapper current-page"
        >
          <h4>{number}</h4>
        </div>
        <button
          className={
            number > PetsData.length / postPerPage
              ? "carousel-btn-wrapper inactive"
              : "carousel-btn-wrapper"
          }
          onClick={() => setNumber(number + 1)}
          disabled={number > PetsData.length / postPerPage -1}
        >
          &gt;
        </button>
        <button
          className={
            number > PetsData.length / postPerPage
              ? "carousel-btn-wrapper inactive"
              : "carousel-btn-wrapper"
          }
          onClick={() => setNumber(Math.round(PetsData.length / postPerPage))}
        >
          &gt;&gt;
        </button>
      </div>

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

export default CarouselMulti;
