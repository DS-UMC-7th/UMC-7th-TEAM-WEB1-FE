import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import axios from "axios";

export default function ReviewList({ reviewArray, width = "12.8rem", listLength = null }) {
  const location = useLocation();
  const { state } = location;
  const searchResults = state?.results || null;

  const [reviews1, setReviews1] = useState([]);
  const [reviews2, setReviews2] = useState([]);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // api 연결
  const api = axios.create({
    baseURL: "http://3.38.66.123:3000",
  });

  const fetchReviews = async ({ path, setReviews }) => {
    try {
      const response = await api.get(`/reviews/${path}`, {
        params: {
          limit: listLength,
        },
      });

      const data = response.data;

      if (data.isSuccess && Array.isArray(data.result.reviews)) {
        setReviews(data.result.reviews);
      } else {
        throw new Error("응답 데이터 형식이 올바르지 않습니다.");
      }

      setLoading(false);
    } catch (err) {
      console.error("리뷰 데이터 요청 오류:", err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchResults) {
      fetchReviews({ path: "popular", setReviews: setReviews1 });
      fetchReviews({ path: "latest", setReviews: setReviews2 });
    } else {
      setLoading(false); // 검색 결과가 있을 경우 로딩 완료
    }
  }, [searchResults]);
  useEffect(() => {
    if (reviewArray === 1) {
      setReviews(reviews1);
    } else {
      setReviews(reviews2);
    }
  }, [reviewArray, reviews1, reviews2]);

  if (loading) {
    return <p>리뷰를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류 발생: {error}</p>;
  }

  const displayReviews = searchResults || reviews;

  return (
    <div>
      {displayReviews.length > 0 ? (
        displayReviews.map((review, index) => (
          <ReviewCard
            key={index}
            reviewTitle={review.lectureName}
            reviewClass={review.platform}
            reviewName={review.instructorName}
            reviewDate={review.date}
            reviewContent={review.review}
            reviewStarNum={review.rating}
            width={width}
          />
        ))
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
    </div>
  );
}
