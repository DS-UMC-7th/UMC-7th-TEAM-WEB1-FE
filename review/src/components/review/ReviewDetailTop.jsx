import React from "react";
import styled from "styled-components";
import BannerSection from "./BannerSection";
import GallerySection from "./GallerySection";
import detailtop from "../../assets/image/detail_top.png";
import class1 from "../../assets/image/class1_1.png";
import class2 from "../../assets/image/class1_2.png";
import class3 from "../../assets/image/class1_3.png";
import class4 from "../../assets/image/class1_4.png";
import class5 from "../../assets/image/class1_5.png";

const ReviewDetailTopPage = () => {
    const galleryImages = [
      class1,
      class2,
      class3,
      class4,
      class5,
    ];
  
    return (
      <Container>
        <BannerSection
          image={detailtop}
          title="초보자도 가능한 그림 같은 화과자, 갸또디솔레의 계절별 고나시 18종"
          subtitle="클로소 | 갸또디솔레 대표 서지현"
        />
        <GallerySection title="클래스 갤러리" images={galleryImages} />
      </Container>
    );
  };

export default ReviewDetailTopPage;

const Container = styled.div`
  width: 100%;
  background-color: #f9f9f9;
`;

