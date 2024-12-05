import { useState } from "react";
import ReviewFilterAlign from "../components/review/review-all/ReviewFilter";
import ReviewList from "../components/review/review-all/ReviewList";

const Reviews = () => {
  const [reviewArray, setReviewArray] = useState(1);

  return (
    <>
      <ReviewFilterAlign alignSelected={reviewArray} setAlignSelected={setReviewArray} />
      <ReviewList reviewArray={reviewArray} />
    </>
  );
};

export default Reviews;
