import styled from "styled-components";
import ReviewDetailTopPage from "../components/review/ReviewDetailTop";
import ReviewDetailList from "../components/review/review-detail/ReviewDetailList";

const ReviewDetail = () => {
  return (
    <StyledContent>
      <ReviewDetailTopPage />
      <ReviewDetailList />
    </StyledContent>
  );
};

export default ReviewDetail;

const StyledContent = styled.h1`
  height: 100%;
  background-color: white;
  color: black;
  margin-top: 5px;
`;
