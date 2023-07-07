import React, { useEffect, useState } from "react";
import data from "../../Data/testimonials";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Testimonials.css";
const Testimonials = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="testimonials">
      <div className="heading">
        <h1>Testimonials</h1>
        <p>
          TESTIMONIALS FROM CLIENTS WHO HAVE BEEN HIGHLY SATISFIED WITH MY
          SERVICE & WORK.
        </p>
      </div>
      <div className="section-center">
      {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"/>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
