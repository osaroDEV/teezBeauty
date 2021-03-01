import React, { useState } from "react";
import "./reviews.css";
import revData from "./revdata";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaQuoteLeft,
} from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    console.log("changed index");
    setIndex((index) => {
      let newIndex = index + 1;
      return checker(newIndex);
    });
  };
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checker(newIndex);
    });
  };
  const checker = (num) => {
    if (num === revData.length) {
      return 0;
    }
    if (num < 0) {
      return revData.length - 1;
    } else {
      return num;
    }
  };

  // setInterval(changer, 10000);
  const { img, name, text } = revData[index];
  return (
    <div className="review">
      <div>
        <div style={{ marginTop: "1em" }}>
          <div className="review-head">
            <FaChevronLeft onClick={prev} />
            <img className="rev-img" src={img} alt={name} />
            <FaChevronRight onClick={next} />
          </div>
          <p className="name">{name}</p>
          <div style={{ margin: "1em auto", width: "2em" }}>
            <FaQuoteLeft />
          </div>
          <p>{text}</p>
          <div style={{ margin: "1em auto", width: "2em" }}>
            <FaQuoteRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
