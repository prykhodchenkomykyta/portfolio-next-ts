"use client";
import React, { useRef } from "react";
import "./Reviews.css";
import { REVIEWS } from "@/utils/data";
import ReviewsCard from "./ReviewsCard/ReviewsCard";
import Slider from "react-slick";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Reviews: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 769, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const slideRight = () => {
    sliderRef.current?.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section id="reviews" className="reviews-container">
      <h5>Відгуки</h5>

      <div className="reviews-content">
        <div className="arrow-right" onClick={slideRight}>
          <ArrowForwardOutlinedIcon />
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <ArrowBackOutlinedIcon />
        </div>

        <Slider ref={sliderRef} {...settings}>
          {REVIEWS.map((item) => (
            <ReviewsCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
