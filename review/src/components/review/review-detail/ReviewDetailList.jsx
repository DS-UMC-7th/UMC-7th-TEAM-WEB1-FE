import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./ReviewDetail.style";
import ReviewDetailRating from "./ReviewDetailRating";
import ReviewDetailFilter from "./ReviewDetailFilter";
import ReviewDetailCard from "./ReviewDetailCard";
import ArrowLeftSvg from "../../../assets/icon/arrow-left-10x16.svg";
import ArrowRightSvg from "../../../assets/icon/arrow-right-10x16.svg";

export default function ReviewDetailList() {
  const [reviewArray, setReviewArray] = useState(1);
  const [reviewList, setReviewList] = useState([]);
  const [reviewList1, setReviewList1] = useState([]);
  const [reviewList2, setReviewList2] = useState([]);

  // api 연결
  const api = axios.create({
    baseURL: "http://3.38.66.123:3000",
  });

  async function getReviewsRecommended({ pageNum = 1 }) {
    try {
      const response = await api.get("/lectures/1/reviews/recommended", {
        params: {
          page: pageNum,
        },
      });

      await setReviewList1(response.data.result.reviews);
      console.log("추천순: ", response.data.result); // 성공
    } catch (error) {
      console.error("추천순 실패:", error.response?.data || error.message);
    }
  }
  async function getReviewsLatest({ pageNum = 1 }) {
    try {
      const response = await api.get("/lectures/1/reviews/latest", {
        params: {
          page: pageNum,
        },
      });

      await setReviewList2(response.data.result.reviews);
      console.log("최신순: ", response.data.result); // 성공
    } catch (error) {
      console.error("최신순 실패:", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getReviewsRecommended({ pageNum: 1 });
    getReviewsLatest({ pageNum: 1 });
  }, []);
  useEffect(() => {
    if (reviewArray === 1) {
      setReviewList(reviewList1);
    } else {
      setReviewList(reviewList2);
    }
  }, [reviewArray, reviewList1, reviewList2]);

  return (
    <>
      {/* 별점 통계 */}
      <ReviewDetailRating />
      {/* 필터링 드롭다운&추천순|최신순 */}
      <ReviewDetailFilter alignSelected={reviewArray} setAlignSelected={setReviewArray} />
      {/* 맵함수 */}
      <S.ReviewList>
        {reviewList.map((data) => (
          <>
            <ReviewDetailCard
              key={data.reviewId}
              reviewId={data.reviewId}
              reviewStarNum={data.rating}
              reviewLikeNum={data.recommendations}
              reviewDate={data.date}
              reviewtTerm={data.duration}
              reviewContent={data.reviewContent}
            />
          </>
        ))}
      </S.ReviewList>

      <S.PagenationContainer>
        <S.ArrowImg src={ArrowLeftSvg} alt="이전 페이지" />
        <S.PageNum $isSelected={true}>1</S.PageNum>
        <S.PageNum $isSelected={false}>2</S.PageNum>
        <S.PageNum $isSelected={false}>3</S.PageNum>
        <S.PageNum $isSelected={false}>4</S.PageNum>
        <S.ArrowImg src={ArrowRightSvg} alt="다음 페이지" />
      </S.PagenationContainer>
    </>
  );
}
