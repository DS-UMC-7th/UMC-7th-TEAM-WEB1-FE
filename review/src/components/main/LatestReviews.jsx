import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ReviewList from "../review/review-all/ReviewList";
import more from "../../assets/image/arrow.png";

export default function LatestReviews() {
  const navigate = useNavigate();

  // api 연결
  const api = axios.create({
    baseURL: "http://3.38.66.123:3000",
  });

  async function getReviewsLatest() {
    try {
      const response = await api.get("/reviews/latest");

      console.log("메인: ", response.data.result.reviews); // 로그인 성공
      // console.log(response.data.message); // 로그인 성공
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
    }
  }
  useEffect(() => {
    getReviewsLatest();
  }, []);

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
