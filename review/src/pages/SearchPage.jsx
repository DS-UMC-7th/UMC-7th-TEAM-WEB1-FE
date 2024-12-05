import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReviewCard from "../components/review/review-all/ReviewCard";
import ReviewFilterAlign from "../components/review/review-all/ReviewFilter";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");

  const [reviews, setReviews] = useState([]); // 전체 리뷰 데이터
  const [sortedReviews, setSortedReviews] = useState([]); // 정렬된 리뷰 데이터
  const [reviewArray, setReviewArray] = useState(1); // 1: 추천순, 2: 최신순
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `http://3.38.66.123:3000/api/lectures/search?keyword=${encodeURIComponent(
            keyword
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("검색 결과를 가져오는 데 실패했습니다.");
        }

        const data = await response.json();

        if (data.isSuccess && Array.isArray(data.result)) {
          // 모든 강의에서 리뷰 추출
          const allReviews = data.result
            .filter((lecture) => lecture.reviews && lecture.reviews.length >= 1)
            .flatMap((lecture) =>
              lecture.reviews.map((review) => ({
                ...review,
                lectureName: lecture.lectureName,
                platform: lecture.platform,
                instructorName: lecture.instructorName,
              }))
            );

          setReviews(allReviews);
          setSortedReviews(allReviews); // 초기 상태 설정
        } else {
          throw new Error("검색 결과 데이터 형식이 올바르지 않습니다.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (keyword) {
      fetchSearchResults();
    }
  }, [keyword]);

  // 정렬 상태가 변경될 때 정렬 수행
  useEffect(() => {
    if (reviewArray === 1) {
      // 추천순: 평점 기준 내림차순
      setSortedReviews([...reviews].sort((a, b) => b.rating - a.rating));
    } else if (reviewArray === 2) {
      // 최신순: 날짜 기준 내림차순
      setSortedReviews(
        [...reviews].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [reviewArray, reviews]);

  if (loading) {
    return <p>검색 결과를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류 발생: {error}</p>;
  }

  if (sortedReviews.length === 0) {
    return (
      <p style={{ margin: "20%", textAlign: "center", fontSize: "20px" }}>
        "{keyword}" 강의에 대한 리뷰가 아직 없습니다.
      </p>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환
  };

  return (
    <div>
      {/* 정렬 컴포넌트 추가 */}
      <ReviewFilterAlign alignSelected={reviewArray} setAlignSelected={setReviewArray} />
      <div>
        {sortedReviews.map((review) => (
          <ReviewCard
            key={review.reviewId}
            reviewTitle={review.lectureName}
            reviewClass={review.platform}
            reviewName={review.instructorName}
            reviewDate={formatDate(review.createdAt)}
            reviewContent={review.content}
            reviewStarNum={review.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
