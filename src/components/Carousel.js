import React, { useEffect, useState } from "react";
import "./css/Carousel.css";
import CarouselItem from "./CarouselItem";
import Dot from "./Dot";
import data from "../comments.json";
import Button from "./Button";

const Carousel = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setComments(data);
    setInterval(() => next(), 7000);
  }, []);
  const setSlidePosition = (slide, i, slideWidth) => {
    slide.style.left = (slideWidth + 60) * i + "px";
  };

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  const next = () => {
    const track = document.querySelector(".carousel__container__items");
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.map((e, i) => {
      setSlidePosition(e, i, slideWidth);
    });
    const dotsNavs = document.querySelector(".carousel__nav");
    const dots = Array.from(dotsNavs.children);
    const currentSlide = document.querySelector(".current-slide");
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide == slides[slides.length - 3]) nextSlide = slides[0];
    const currentDot = document.querySelector(".current-dot");
    let targetDot = currentDot.nextElementSibling;
    if (targetDot == null) targetDot = dots[0];
    moveToSlide(track, currentSlide, nextSlide);

    if (currentSlide != slides[slides.length - 4]) {
      document.querySelector(".current-dot").classList.remove("current-dot");
      targetDot.classList.add("current-dot");
      track.style.transitionProperty = "transform";
    } else {
      track.style.transitionProperty = "none";
      next();
    }
  };

  const onClickDot = (i) => {
    const track = document.querySelector(".carousel__container__items");
    const currentSlide = document.querySelector(".current-slide");
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.map((e, i) => {
      setSlidePosition(e, i, slideWidth);
    });
    const targetSlide = slides[i];
    moveToSlide(track, currentSlide, targetSlide);
    document.querySelector(".current-dot").classList.remove("current-dot");
    document.querySelector(".carousel__nav").children[i].classList.value +=
      " current-dot";
  };

  return (
    <div className="Carousel">
      <div className="carousel__container">
        <h1 className="carousel__container__title">What they've said</h1>
        <ul className="carousel__container__items">
          {comments.map((e, i) => {
            return i == 0 ? (
              <CarouselItem
                key={e.id}
                avatar={e.avatar}
                name={e.name}
                comment={e.comment}
                current={true}
              />
            ) : (
              <CarouselItem
                key={e.id}
                avatar={e.avatar}
                name={e.name}
                comment={e.comment}
              />
            );
          })}
          {comments.map((e, i) => {
            while (i < 4) {
              return (
                <CarouselItem
                  key={e.id}
                  avatar={e.avatar}
                  name={e.name}
                  comment={e.comment}
                />
              );
            }
          })}
        </ul>
      </div>
      <div className="carousel__nav">
        {comments.map((e, i) =>
          i == 0 ? (
            <Dot key={e.id} current={true} i={i} onClickDot={onClickDot} />
          ) : (
            <Dot key={e.id} i={i} onClickDot={onClickDot} />
          )
        )}
      </div>
      <Button link="./#GetStarted" cont="Get Started" />
    </div>
  );
};

export default Carousel;
