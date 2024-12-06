import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReviewList from "../review/review-all/ReviewList";
import more from "../../assets/image/arrow.png";

export default function LatestReviews() {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate("/review/list");
  };

  return (
    <>
      <Section>
        <Title onClick={handleArrowClick}>
          최신 리뷰 <img src={more} alt=">" style={{ cursor: "pointer" }} />
        </Title>

        <ReviewList width={"8.8rem"} listLength={4} />
      </Section>
    </>
  );
}

const Section = styled.div`
  margin-top: 8rem;
  background-color: #fff;
`;
const Title = styled.h2`
  display: inline-block;

  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 88px;
  font-style: normal;
  margin-top: 20px;

  font-weight: 700;
  line-height: 124.9%;

  img {
    width: 13px;
    margin-left: 10px;
  }

  cursor: pointer;
`;
