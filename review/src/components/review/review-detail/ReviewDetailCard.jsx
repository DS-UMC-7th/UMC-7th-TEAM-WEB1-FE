import * as S from "./ReviewDetail.style";
import StarOnPng from "../../../assets/icon/star-filled-25x26.png";
import StarOffPng from "../../../assets/icon/star-empty-25x26.png";
import LikeSvg from "../../../assets/icon/like-25x24.svg";
import axios from "axios";
import { useState } from "react";

export default function ReviewDetailCard({
  reviewId,
  reviewStarNum = 5,
  reviewLikeNum,
  reviewDate,
  reviewtTerm,
  reviewContent,
}) {
  const [reviewLikeNumState, setReviewLikeNumState] = useState(reviewLikeNum);
  // api 연결
  const api = axios.create({
    baseURL: "http://3.38.66.123:3000",
  });

  async function postReviewRecommend() {
    try {
      const response = await api.post(`/comments/${reviewId}/recommend`);

      // console.log("따봉: ", response.data); // 성공
    } catch (error) {
      console.error("따봉 실패:", error.response?.data || error.message);
    }
  }

  const handleRecommendBtn = () => {
    postReviewRecommend();
    setReviewLikeNumState((prev) => prev + 1);
  };

  return (
    <>
      <S.ReviewContainer>
        <S.ContainerBetween>
          <S.ReviewStarList2>
            {Array.from({ length: reviewStarNum }, (_, index) => (
              <S.ReviewStar2 key={index} src={StarOnPng} alt="채워진 별" />
            ))}
            {Array.from({ length: 5 - reviewStarNum }, (_, index) => (
              <S.ReviewStar2 key={index} src={StarOffPng} alt="빈 별" />
            ))}
          </S.ReviewStarList2>
          <S.LikeBtn onClick={handleRecommendBtn}>
            <S.LikeImg src={LikeSvg} alt="따봉" />
            {reviewLikeNumState}
          </S.LikeBtn>
        </S.ContainerBetween>
        <S.ContainerStart>
          <p>{reviewDate}</p>
          <p>공부기간: {reviewtTerm}</p>
        </S.ContainerStart>
        <S.ReviewContent>{reviewContent}</S.ReviewContent>
      </S.ReviewContainer>
    </>
  );
}
