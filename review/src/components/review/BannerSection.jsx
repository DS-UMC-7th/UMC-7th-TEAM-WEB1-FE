import React from "react";
import styled from "styled-components";

const BannerSection = ({ image, title, subtitle }) => {

  const formatText = (text) => {
    return text
      .split(",") // 쉼표를 기준으로 나눔
      .map((part) => part.trim()) 
      .join(",\n"); 
  };

  return (
    <Banner>
      <BannerImage src={image} alt="Banner" />
      <BannerOverlay>
        <Title>{formatText(title)}</Title>
        <Subtitle>{formatText(subtitle)}</Subtitle>
      </BannerOverlay>
    </Banner>
  );
};

export default BannerSection;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 518px;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 518px;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 42%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left; 
  padding: 20px;
  padding-left: 4%;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #E55F00;
  text-align: left;
  white-space: pre-wrap; 
  line-height: 1.5; 
`;

const Subtitle = styled.p`
  font-size: 24px;
  text-align: left;
  white-space: pre-wrap;
  line-height: 1.5; 
`;
