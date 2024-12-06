import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./ReviewDetail.style";
import ReviewDetailRating from "./ReviewDetailRating";
import ReviewDetailFilter from "./ReviewDetailFilter";
import ReviewDetailCard from "./ReviewDetailCard";
import ArrowLeftSvg from "../../../assets/icon/arrow-left-10x16.svg";
import ArrowRightSvg from "../../../assets/icon/arrow-right-10x16.svg";

export default function ReviewDetailList() {
  const [pageSelected, setPageSelected] = useState(1);
  const [isFilterChecked, setIsFilterChecked] = useState({
    6: true,
    5: true,
    4: true,
    3: true,
    2: true,
    1: true,
  });
  const [ratingCount, setRatingCount] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [reviewArray, setReviewArray] = useState(1);
  const [reviewList, setReviewList] = useState({ reviews: [], totalPages: 0 });
  const [reviewList1, setReviewList1] = useState({ reviews: [], totalPages: 0 });
  const [reviewList2, setReviewList2] = useState({ reviews: [], totalPages: 0 });

  // api 연결
  const api = axios.create({
    baseURL: "http://3.38.66.123:3000",
  });

  async function getReviewsRecommended({ pageNum = 1 }) {
    try {
      const response = await api.get("/lectures/1/reviews/recommended", {
        params: {
          limit: 10,
          page: pageNum,
        },
      });

      await setReviewList1(response.data.result);
      // console.log("추천순: ", response.data.result); // 성공
    } catch (error) {
      console.error("추천순 실패:", error.response?.data || error.message);
    }
  }
  async function getReviewsLatest({ pageNum = 1 }) {
    try {
      const response = await api.get("/lectures/1/reviews/latest", {
        params: {
          limit: 10,
          page: pageNum,
        },
      });

      await setReviewList2(response.data.result);
      // console.log("최신순: ", response.data.result); // 성공
    } catch (error) {
      console.error("최신순 실패:", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getReviewsRecommended({ pageNum: pageSelected });
    getReviewsLatest({ pageNum: pageSelected });
  }, [pageSelected]);
  useEffect(() => {
    if (reviewArray === 1) {
      setReviewList(reviewList1);
    } else {
      setReviewList(reviewList2);
    }
  }, [reviewArray, reviewList1, reviewList2]);

  // 리뷰 필터링
  const filteredReviews = reviewList.reviews.filter((review) => {
    return isFilterChecked[review.rating];
  });

  return (
    <>
      {/* 별점 통계 */}
      <ReviewDetailRating setRatingCount={setRatingCount} />
      {/* 필터링 드롭다운&추천순|최신순 */}
      <ReviewDetailFilter
        ratingCount={ratingCount}
        isFilterChecked={isFilterChecked}
        setIsFilterChecked={setIsFilterChecked}
        alignSelected={reviewArray}
        setAlignSelected={setReviewArray}
      />
      {/* 맵함수 */}
      <S.ReviewList>
        {filteredReviews.map((data) => (
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
        <S.ArrowImg
          onClick={() => setPageSelected(pageSelected !== 1 ? pageSelected - 1 : 1)}
          src={ArrowLeftSvg}
          alt="이전 페이지"
        />

        {Array.from({ length: reviewList.totalPages }, (_, index) => (
          <S.PageNum
            key={index + 1}
            $isSelected={index + 1 === pageSelected}
            onClick={() => setPageSelected(index + 1)}
          >
            {index + 1}
          </S.PageNum>
        ))}

        <S.ArrowImg
          onClick={() =>
            setPageSelected(reviewList.totalPages !== pageSelected ? pageSelected + 1 : 3)
          }
          src={ArrowRightSvg}
          alt="다음 페이지"
        />
      </S.PagenationContainer>
    </>
  );
}
