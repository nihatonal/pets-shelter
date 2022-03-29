import React, { useState, useEffect } from "react";

import { PetsData } from "../../assets/PetsData";
import Card from "../../shared/IU/Card";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "./CarouselMulti.css";
import Pets from "../Page/Pets";
const CarouselMulti = () => {
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(2);
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    setPost(PetsData);
    if (number < 1) {
      setInactive(true);
    }
  }, []);

  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  console.log();

  return (
    <div className="carousel_container">
      <div className="carousel-slider">
        {currentPost.map((Val) => {
          return (
            <Card key={Val.id} id={Val.id}>
              <img src={Val.image} alt={Val.name} />
              <p className="card-name">{Val.name}</p>
              <button
                className="card-btn"
                // onClick={() => modalHandler(Val.id)}
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
          onClick={() => setNumber(number - 1)}
        >
          <h4>{number}</h4>
        </div>
        <button
          className={
            number > PetsData.length / postPerPage - 1
              ? "carousel-btn-wrapper inactive"
              : "carousel-btn-wrapper"
          }
          onClick={() => setNumber(number + 1)}
          disabled={number > PetsData.length / postPerPage - 1}
        >
          &gt;
        </button>
        <button
          className={
            number > PetsData.length / postPerPage - 1
              ? "carousel-btn-wrapper inactive"
              : "carousel-btn-wrapper"
          }
          onClick={() => setNumber(PetsData.length / postPerPage)}
        >
          &gt;&gt;
        </button>
      </div>

      {/* <div className="container-fluid">
        <div className="row">
          <table>
            <thead>
              <tr>
                <th>
                  S No.
                </th>
                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Comment
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map((Val) => {
                return (
                  <>
                    <tr
                      className="border-2 border-dark text-center"
                      key={Val.id}
                    >
                      <td className="border-2 border-dark th-1">
                        {Val.id}
                      </td>
                      <td className="border-2 border-dark th-1">
                        {Val.name}
                      </td>
                      <td className="border-2 border-dark th-1">
                        {Val.email}
                      </td>
                      <td className="border-2 border-dark th-1">
                        {Val.body}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <div className="my-3 text-center">
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setNumber(number - 1)}
            >
              Previous
            </button>

            {pageNumber.map((Elem) => {
              return (
                <>
                  <button
                    className="px-3 py-1 m-1 text-center btn-outline-dark"
                    onClick={() => ChangePage(Elem)}
                  >
                    {Elem}
                  </button>
                </>
              );
            })}
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setNumber(number + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CarouselMulti;
