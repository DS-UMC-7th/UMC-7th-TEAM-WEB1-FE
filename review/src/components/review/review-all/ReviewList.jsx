import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReviewCard from "./ReviewCard";

// export default function ReviewList() {

//   const location = useLocation();
//   const { state } = location;
//   const results = state?.results || []; // 전달된 검색 결과가 없으면 빈 배열

//   // return (
//   //   <>
//   //     <ReviewCard
//   //       reviewTitle="한 입 크기로 잘라먹는 Next.js(15+)"
//   //       reviewClass="인프런"
//   //       reviewName="이정환"
//   //       reviewDate="2024.03.08"
//   //       reviewContent="제빵일을 하고있지만 구움과자의 섬세함을 배우려면 기초부터 잘 알아야하는데
//   //       선생님의 스콘 클래스를 듣고나면 혼자 해보면서 ‘왜 이렇게 해야하지?‘ 궁금했던 점을 다
//   //       알려주세요. 그래서 다른 유튜브나 인스타에서 보이는 레시피를 보아도 기준점이 생겼어요 :)
//   //       너무 흔하지도, 유행을 따라가지도 않는 맛을 골라주시고 좋은 재료를 사용해서 적당히 달고
//   //       고소한 버터의 맛이 잘 살아있는 스콘을 경험 할 수 있었어요. 홈베이킹용으로도 사업자용으로도
//   //       최고의 수업입니다"
//   //       reviewStarNum={4}
//   //     />
//   //     <ReviewCard
//   //       reviewTitle="두 입 크기로 잘라먹는 Next.js(15+)"
//   //       reviewClass="클래스101"
//   //       reviewName="이정인"
//   //       reviewDate="2024.03.06"
//   //       reviewContent="무조건 들어야하는 클래스!!! 제 구움과자 스킬은 선생님 클래스를 듣기 전과 후로
//   //       나뉘어요."
//   //       reviewStarNum={2}
//   //     />
//   //   </>
//   // );

//   return (
//     <div>
//       {results.length > 0 ? (
//         results.map((review, index) => (
//           <ReviewCard
//             key={index}
//             reviewTitle={review.lectureName}
//             reviewClass={review.platform}
//             reviewName={review.author}
//             reviewDate={review.date}
//             reviewContent={review.content}
//             reviewStarNum={review.rating}
//           />
//         ))
//       ) : (
//         <p>검색 결과가 없습니다.</p>
//       )}
//     </div>
//   );
// }

export default function ReviewList() {
  const location = useLocation();
  const { state } = location;
  const searchResults = state?.results || null;

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLatestReviews = async () => {
    try {
      const response = await fetch("http://3.38.66.123:3000/reviews/latest", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("최신 리뷰를 가져오는 데 실패했습니다.");
      }

      const data = await response.json();

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
      fetchLatestReviews();
    } else {
      setLoading(false); // 검색 결과가 있을 경우 로딩 완료
    }
  }, [searchResults]);

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
          />
        ))
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
    </div>
  );
}
