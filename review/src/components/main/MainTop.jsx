import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner1 from "../../assets/image/banner1.png";
import Banner2 from "../../assets/image/banner2.png";
import Banner3 from "../../assets/image/banner3.png";
import Banner4 from "../../assets/image/banner4.png";
import Banner5 from "../../assets/image/banner5.png";

const MainTop = () => {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => <CustomDots>{dots}</CustomDots>,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <SlideImage src={src} alt={`banner-${index + 1}`} />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default MainTop;

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
`;

const CustomDots = styled.ul`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex !important;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 2px;

    button {
      font-size: 0;
      width: 10px;
      height: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      border: none;
      border-radius: 50%;
      transition: all 0.3s ease;

      &::before {
        font-size: 0; 
      }
    }

    &.slick-active button {
      background-color: rgba(0, 0, 0, 0.8);
      width: 12px;
      height: 12px;
    }
  }
`;
