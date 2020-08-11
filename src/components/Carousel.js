import React, { useEffect, useState, useCallback } from "react";
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
  }, [next]);

  const setSlidePosition = (slide, i, slideWidth) => {
    slide.style.left = slideWidth * i + "px";
  };

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  const next = useCallback(() => {
    const track = document.querySelector(".carousel__container__items");
    const dotsNavs = document.querySelector(".carousel__nav");
    const currentSlide = document.querySelector(".current-slide");
    const currentDot = document.querySelector(".current-dot");
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    const dots = Array.from(dotsNavs.children);

    slides.map((e, i) => {
      setSlidePosition(e, i, slideWidth);
    });

    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide == slides[slides.length - 6]) nextSlide = slides[0];
    let targetDot = currentDot.nextElementSibling;
    if (targetDot == null) targetDot = dots[0];
    moveToSlide(track, currentSlide, nextSlide);

    if (currentSlide != slides[slides.length - 7]) {
      document.querySelector(".current-dot").classList.remove("current-dot");
      targetDot.classList.add("current-dot");
      track.style.transitionProperty = "transform";
    } else {
      track.style.transitionProperty = "none";
      next();
    }
  }, []);

  const onClickDot = (i) => {
    const track = document.querySelector(".carousel__container__items");
    const currentSlide = document.querySelector(".current-slide");
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    const targetSlide = slides[i];

    slides.map((e, i) => {
      setSlidePosition(e, i, slideWidth);
    });
    moveToSlide(track, currentSlide, targetSlide);
    document.querySelector(".current-dot").classList.remove("current-dot");
    document.querySelector(".carousel__nav").children[i].classList.value +=
      " current-dot";
  };

  return (
    <div className="Carousel">
      <div className="carousel__container">
        <h1 className="carousel__container__title">What they&apos;ve said</h1>
        <ul className="carousel__container__items">
          {comments.map(({ id, avatar, name, comment }, i) => {
            return i == 0 ? (
              <CarouselItem
                key={id}
                avatar={avatar}
                name={name}
                comment={comment}
                current={true}
              />
            ) : (
              <CarouselItem
                key={id}
                avatar={avatar}
                name={name}
                comment={comment}
              />
            );
          })}
          {comments.map(({ id, avatar, name, comment }, i) => {
            while (i < 4) {
              return (
                <CarouselItem
                  key={id}
                  avatar={avatar}
                  name={name}
                  comment={comment}
                />
              );
            }
          })}
          {comments.map(({ id, avatar, name, comment }, i) => {
            while (i < 3) {
              return (
                <CarouselItem
                  key={id}
                  avatar={avatar}
                  name={name}
                  comment={comment}
                />
              );
            }
          })}
        </ul>
      </div>
      <div className="carousel__nav">
        {comments.map(({ id }, i) => (
          <Dot key={id} i={i} onClickDot={onClickDot} />
        ))}
      </div>
      <Button link="./#GetStarted">Get Started</Button>
    </div>
  );
};

export default Carousel;
