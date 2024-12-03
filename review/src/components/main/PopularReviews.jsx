import React, { useEffect, useState } from "react";
import styled from "styled-components";
import more from "../../assets/image/arrow.png";
import { useNavigate } from "react-router-dom";
import lecture from "../../assets/image/mainimg.png";

const PopularReviews = () => {
  const navigate = useNavigate();

  // 상태 관리
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 데이터 가져오기 함수
  const fetchReviews = async () => {
    try {
      const response = await fetch("http://3.38.66.123:3000/reviews/popular");
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const data = await response.json();
  
      // 응답 데이터에서 reviews 배열 추출
      if (data.isSuccess && data.result && Array.isArray(data.result.reviews)) {
        setReviews(data.result.reviews);
      } else {
        throw new Error("Invalid response format");
      }
  
      setLoading(false);
    } catch (err) {
      console.error("Fetch Error:", err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);


  const renderStars = (rating) => {
    const totalStars = 5; // 총 별 개수
    const filledStars = Math.floor(rating); // 꽉 찬 별 개수
    const hasHalfStar = rating % 1 !== 0; // 반쪽 별 여부

    return Array.from({ length: totalStars }, (_, index) => {
      if (index < filledStars) {
        // 꽉 찬 별
        return <Star key={index} active>★</Star>;
      } else {
        // 빈 별
        return <Star key={index}>☆</Star>;
      }
    });
  };

  const handleArrowClick = () => {
    navigate("/review/list");
  };

  if (loading) {
    return <Section>Loading...</Section>;
  }

  if (error) {
    return <Section>Error: {error}</Section>;
  }

  const handleCardClick = (id) => {
    navigate(`/review/detail/${id}`);
  };

  return (
    <Section>
      <Line />
      <Title>
        지금 뜨는 인기 리뷰{" "}
        <img
          src={more}
          alt=">"
          onClick={handleArrowClick}
          style={{ cursor: "pointer" }}
        />
      </Title>
      <ReviewList>
        {reviews.map((review, index) => (
          <ReviewCard key={index} onClick={() => handleCardClick(review.lectureId)}>
            {/* 이미지 필드가 없으므로 기본 이미지를 사용하거나 추가 처리 */}
            <Image src={lecture} alt={review.lectureName} />
            <ReviewContent>
              <ReviewTitle>{review.lectureName}</ReviewTitle>
              <Rating>{renderStars(review.rating)}</Rating>
              <Description>{review.review}</Description>
            </ReviewContent>
          </ReviewCard>
        ))}
      </ReviewList>
      <Line />
    </Section>
  );
};

export default PopularReviews;

const Section = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const Line = styled.hr`
  width: 90%; 
  border-color: #d9d9d9;
  border-width: 1px;
  border-style: solid;
  margin: 0 auto; 
`;

const Title = styled.h2`
  font-size: 20px; 
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 20px;
  font-style: normal;
  margin-top: 20px;

  font-weight: 700;
  line-height: 124.9%;

  img {
    width: 13px;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    font-size: 30px; 
    margin-left: 68px;
  }
`;

const ReviewList = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start; 
  gap: 10px;
  overflow-x: auto; 
  padding: 10px 0;
  justify-content: space-around;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE 및 Edge */
  scrollbar-width: none; /* Firefox */
`;

const ReviewCard = styled.div`
  cursor: pointer;

  max-width: 20%; 
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  background: linear-gradient(180deg, #e55f00 0%, #ffffff 40%);

`;

const Image = styled.img`
  width: -webkit-fill-available;
  height: 200px; 
  object-fit: cover;
  margin: 20px;
  border-radius: 10px;
`;

const ReviewContent = styled.div`
  padding: 10px 15px;

  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;

const ReviewTitle = styled.h3`
  text-align: justify;
  font-size: 20px; 
  margin: 0 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄까지 표시 */
  -webkit-box-orient: vertical;
`;

const Rating = styled.div`
  text-align: left;
  font-size: 14px;
  color: #e55f00;
`;

const Description = styled.p`
  text-align: justify;
  margin-top: 10px;
  font-size: 15px;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄까지 표시 */
  -webkit-box-orient: vertical;
  margin-bottom: 20px;
`;

const Star = styled.span`
  margin-right: 2px;
  color: ${(props) => (props.active ? "#E55F00" : "#E55F00")}; 
`;