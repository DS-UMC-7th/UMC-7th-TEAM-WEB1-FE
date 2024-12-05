import * as S from "../components/main/Main.style.js";
import MainTop from "../components/main/MainTop.jsx";
import PopularReviews from "../components/main/PopularReviews.jsx";
import LatestReviews from "../components/main/LatestReviews.jsx";

const Main = () => {
  return (
    <S.Container>
      <MainTop />
      <PopularReviews />
      <LatestReviews />
    </S.Container>
  );
};

export default Main;
