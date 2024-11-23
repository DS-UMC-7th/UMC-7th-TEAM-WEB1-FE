import React from "react";
import styled from "styled-components";

const GallerySection = ({ title, images }) => (
  <Gallery>
    <GalleryTitle>{title}</GalleryTitle>
    <GalleryRow>
      {images.map((image, index) => (
        <GalleryItem key={index}>
          <GalleryImage src={image} alt={`Gallery ${index + 1}`} />
        </GalleryItem>
      ))}
    </GalleryRow>
  </Gallery>
);

export default GallerySection;

const Gallery = styled.div`
  padding: 20px;
  background-color: #fff;
  padding-left: 4%;
`;

const GalleryTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const GalleryRow = styled.div`
  display: flex; 
  gap: 15px; 
  overflow-x: auto; 
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f9f9f9;
  }
`;

const GalleryItem = styled.div`
  flex: 0 0 auto; 
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 443px;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
