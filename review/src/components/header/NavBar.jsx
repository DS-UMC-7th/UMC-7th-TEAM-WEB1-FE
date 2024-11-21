import { Link } from "react-router-dom";
import * as S from "./NavBar.style.js";

const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.Logo to="/">REWVIEW IN CLASS</S.Logo>
      <S.NavButtonsWrapper>
        <S.NavButton to="/review/list">전체 리뷰</S.NavButton>
        <S.NavButton to="/review/write">강의평 등록하기</S.NavButton>
        <S.NavButton>검색창</S.NavButton>
      </S.NavButtonsWrapper>
    </S.NavbarContainer>
  );
};

export default Navbar;
