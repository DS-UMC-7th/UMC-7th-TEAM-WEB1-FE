import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./ReviewDetail.style";
import StarOnPng from "../../../assets/icon/star-filled-25x26.png";
import StarOffPng from "../../../assets/icon/star-empty-25x26.png";

export default function ReviewDetailRating() {
  const navigate = useNavigate();
  const [ratingData, setRatingData] = useState({
    averageRating: 0,
    totalReview: 0,
    ratingCount: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    ratingText: {
      5: "아주 좋아요",
      4: "맘에 들어요",
      3: "보통이에요",
      2: "그냥 그래요",
      1: "별로예요",
    },
  });

  // api 연결
  const api = axios.create({
    baseURL: "http://3.38.66.123:3000",
  });

  async function getRatingStatistics() {
    try {
      const response = await api.get("/lectures/1/rating-stats");

      setRatingData((prevData) => ({
        ...prevData,
        averageRating: response.data.result.averageRating,
        totalReview: response.data.result.totalReview,
        ratingCount: response.data.result.ratingCount,
      }));
      // console.log("별점 통계 조회: ", response.data.result); // 성공
    } catch (error) {
      console.error("별점 통계 조회 실패:", error.response?.data || error.message);
    }
  }
  useEffect(() => {
    getRatingStatistics();
  }, []);

  const handleMoveToWrite = () => {
    navigate(`/review/write`);
  };

  return (
    <>
      <S.StarRatingContainerBox>
        <S.StarRatingContainer>
          <S.RatingScore>{ratingData.averageRating}</S.RatingScore>
          <S.ReviewStarList>
            {Array.from({ length: Math.floor(ratingData.averageRating) }, (_, index) => (
              <S.ReviewStar key={index} src={StarOnPng} alt="채워진 별" />
            ))}
            {Array.from({ length: 5 - Math.floor(ratingData.averageRating) }, (_, index) => (
              <S.ReviewStar key={index} src={StarOffPng} alt="빈 별" />
            ))}
          </S.ReviewStarList>
          <S.RatingNum>{ratingData.totalReview}개의 리뷰가 있습니다.</S.RatingNum>
          <S.WriteReviewBtn onClick={handleMoveToWrite}>리뷰 작성하기</S.WriteReviewBtn>
        </S.StarRatingContainer>

        <S.StarRatingContainer>
          {["5", "4", "3", "2", "1"].map((rating) => (
            <S.ChartItemContainer key={rating}>
              <S.ChartText>{ratingData.ratingText[rating]}</S.ChartText>
              <S.ChartBoxBack>
                <S.ChartBoxFront
                  $chartPercent={
                    ratingData.totalReview > 0
                      ? (ratingData.ratingCount[rating] / ratingData.totalReview) * 100
                      : 0
                  }
                />
              </S.ChartBoxBack>
              <S.ChartNum>{ratingData.ratingCount[rating]}</S.ChartNum>
            </S.ChartItemContainer>
          ))}
        </S.StarRatingContainer>
      </S.StarRatingContainerBox>
    </>
  );
}
