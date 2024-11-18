import { Link } from 'react-router-dom';
import * as S from './NavBar.style.js';

const Navbar = () => {

  return (
    <S.NavbarContainer>
      <S.Logo to="/">REWVIEW IN CLASS</S.Logo>
      <S.NavButtonsWrapper>
        <S.NavButton to="/review/popularity">인기 리뷰</S.NavButton>
        <S.NavButton to="/review/recent">최근 리뷰</S.NavButton>
        <S.NavButton>검색창</S.NavButton>
      </S.NavButtonsWrapper>
    </S.NavbarContainer>
  );
};
  
export default Navbar;

