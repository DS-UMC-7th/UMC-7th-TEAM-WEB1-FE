import axios from "axios";
import * as S from "../components/main/Main.style.js";
import MainTop from "../components/main/MainTop.jsx";
import PopularReviews from "../components/main/PopularReviews.jsx";

const Main = () => {
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

  getReviewsLatest();

  return (
    <S.Container>
      <MainTop />
      <PopularReviews />
    </S.Container>
  );
};

export default Main;
