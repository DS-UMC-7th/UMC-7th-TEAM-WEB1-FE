// import React from "react";
// import styled from "styled-components";
// import more from "../../assets/image/arrow.png";
// import { useNavigate } from "react-router-dom";

// const PopularReviews = () => {

//     const navigate = useNavigate();

//     const reviews = [
//         {
//         id: 1,
//         title: "미루는 습관을 없애줄 인생 관리 시스템",
//         image: "https://watermark.lovepik.com/photo/20211208/large/lovepik-teacher-lecture-scene-picture_501662381.jpg",
//         rating: "★★★★★",
//         description: "저는 추천할 작품이 떠오르질 않는데, 댓글들 보고 많은 추천작품을 알게 되고 제가 보았던 것들도 몇 개 있네요. 다시 챙겨보고 새로운 감회를 느껴봐야겠어요",
//         },
//         {
//         id: 2,
//         title: "백엔드 개발이 편리해지는 코틀린과 스프링 부트",
//         image: "https://watermark.lovepik.com/photo/20211208/large/lovepik-teacher-lecture-scene-picture_501662381.jpg",
//         rating: "★★★★☆",
//         description: "백엔드 개발자가 되고 싶지만 맨땅에 헤딩하는 입장이라 모르는 것도 많고 막막했는데, 굉장히 방대한 지식들에 대해 핵심만 간결하게 전해주셔서 좋았습니다. 백엔드 개발자에게 필요한 모든 것들을 잘 설명해주셔서 좋았어요. 정말 감사합니다.",
//         },
//         {
//         id: 3,
//         title: "게임 UX/UI 디자인 툴 완벽 활용법",
//         image: "/path/to/review3.png",
//         rating: "★★★★★",
//         description: "UI/UX의 모든 것을 배우는 기회!",
//         },
//         {
//         id: 4,
//         title: "70여 가지 핵심 스킬로 모든 스킬 마스터",
//         image: "/path/to/review4.png",
//         rating: "★★★★☆",
//         description: "빠르게 새로운 기술을 배우고 있습니다.",
//         },
//     ];

//     const handleArrowClick = () => {
//         navigate("/review/list"); 
//     };

//     return (
//         <Section>
//             <Line/>
//         <Title>지금 뜨는 인기 리뷰 <img src={more} alt=">" onClick={handleArrowClick} style={{cursor: "pointer"}}/></Title>
//         <ReviewList>
//             {reviews.map((review) => (
//             <ReviewCard key={review.id}>
//                 <Image src={review.image} alt={review.title} />
//                 <ReviewContent>
//                 <ReviewTitle>{review.title}</ReviewTitle>
//                 <Rating>{review.rating}</Rating>
//                 <Description>{review.description}</Description>
//                 </ReviewContent>
//             </ReviewCard>
//             ))}
//         </ReviewList>
//         <Line/>    
//         </Section>
//     );
// };

// export default PopularReviews;

// const Section = styled.div`
//   padding: 20px;
//   background-color: #fff;
// `;

// const Line = styled.hr`
//   width: 90%; 
//   border-color: #d9d9d9;
//   border-width: 1px;
//   border-style: solid;
//   margin: 0 auto; 
// `;

// const Title = styled.h2`
//   font-size: 24px; 
//   font-weight: bold;
//   margin-bottom: 20px;
//   text-align: left;
//   margin-left: 20px;
//   font-style: normal;

//   font-weight: 700;
//   line-height: 124.9%;

//   img {
//     width: 14px;
//     margin-left: 10px;
//   }

//   @media (min-width: 768px) {
//     font-size: 30px; 
//     margin-left: 68px;
//   }
// `;

// const ReviewList = styled.div`
//   width: 90%;
//   margin: 0 auto;
//   margin-bottom: 25px;
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: flex-start; 
//   gap: 10px;
//   overflow-x: auto; 
//   padding: 10px 0;
//   justify-content: space-around;

//   &::-webkit-scrollbar {
//     display: none;
//   }

//   -ms-overflow-style: none; /* IE 및 Edge */
//   scrollbar-width: none; /* Firefox */
// `;

// const ReviewCard = styled.div`
//   cursor: pointer;

//   max-width: 20%; 
//   background: #ffffff;
//   border-radius: 10px;
//   border: 1px solid #d9d9d9;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   text-align: center;
//   background: linear-gradient(180deg, #e55f00 0%, #ffffff 40%);

// `;

// const Image = styled.img`
//   width: 100%;
//   height: 200px; 
//   object-fit: cover;
//   width: 85%;
//   margin: 20px;
//   border-radius: 10px;
// `;

// const ReviewContent = styled.div`
//   padding: 10px 15px;

//   @media (min-width: 768px) {
//     padding: 0 20px;
//   }
// `;

// const ReviewTitle = styled.h3`
//   text-align: left;
//   font-size: 20px; 
//   font-weight: bold;
//   margin: 0 0 5px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2; /* 최대 2줄까지 표시 */
//   -webkit-box-orient: vertical;
// `;

// const Rating = styled.div`
//   text-align: left;
//   font-size: 14px;
//   color: #e55f00;

//   @media (min-width: 768px) {
//     font-size: 15px; 
//   }
// `;

// const Description = styled.p`
//   text-align: justify;
//   margin-top: 10px;
//   font-size: 14px;
//   color: #000000;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2; /* 최대 2줄까지 표시 */
//   -webkit-box-orient: vertical;

//   @media (min-width: 768px) {
//     font-size: 18px;
//   }
// `;


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import more from "../../assets/image/arrow.png";
import { useNavigate } from "react-router-dom";

const PopularReviews = () => {
  const navigate = useNavigate();

  // 상태 관리
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 데이터 가져오기 함수
  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:3000//reviews");
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const data = await response.json();
      setReviews(data); 
      setLoading(false); 
    } catch (err) {
      setError(err.message); 
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);


  const renderStars = (rating) => {
    const totalStars = 5; 
    const filledStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 !== 0;

    return Array.from({ length: totalStars }, (_, index) => (
      <Star key={index} active={index < filledStars || (index === filledStars && hasHalfStar)}>
        {index < filledStars ? "★" : index === filledStars && hasHalfStar ? "⯨" : "☆"}
      </Star>
    ));
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
        {reviews.map((review) => (
          <ReviewCard key={review.id}>
            <Image src={review.image} alt={review.title} />
            <ReviewContent>
              <ReviewTitle>{review.title}</ReviewTitle>
              <Rating>{renderStars(review.rating)}</Rating>
              <Description>{review.description}</Description>
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
  font-size: 24px; 
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 20px;

  img {
    width: 14px;
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
  background: linear-gradient(180deg, #E55F00 0%, #ffffff 40%);
`;

const Image = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: cover;
  width: 85%;
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
  text-align: left;
  font-size: 20px; 
  font-weight: bold;
  margin: 0 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`;

const Rating = styled.div`
  text-align: left;
  font-size: 14px;
  color: #E55F00;
  display: flex; 

  @media (min-width: 768px) {
    font-size: 15px; 
  }
`;

const Star = styled.span`
  margin-right: 2px;
  color: ${(props) => (props.active ? "#E55F00" : "#ffffff")}; 
`;

const Description = styled.p`
  text-align: justify;
  margin-top: 10px;
  font-size: 14px;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄까지 표시 */
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
