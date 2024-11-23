import * as S from '../components/main/Main.style.js'
import MainTop from '../components/main/MainTop.jsx';
import PopularReviews from '../components/main/PopularReviews.jsx';

const Main = () => {
  return (
    <S.Container>
      <MainTop />
      <PopularReviews />
    </S.Container>
  );
};

export default Main;