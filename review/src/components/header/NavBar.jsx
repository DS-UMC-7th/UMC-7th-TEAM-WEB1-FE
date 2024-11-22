import React, { useState } from "react";
import * as S from "./NavBar.style.js";
import LogoImage from "../../assets/image/logo.png";
import Search from "../../assets/image/search.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // window.location.href = `/search?query=${searchTerm}`;
      console.log("검색어:", searchTerm);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.NavbarContainer>
      <S.LeftWrapper>
        <S.Logo to="/">
          <img src={LogoImage} alt="Logo" />
        </S.Logo>
        <S.NavButton to="/review/list">전체 리뷰</S.NavButton>
        <S.NavButton to="/review/write">강의평 등록하기</S.NavButton>
      </S.LeftWrapper>
      <S.SearchBar>
        <input
          type="text"
          placeholder="강의명을 검색하면 관련된 리뷰를 보여드릴게요."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
        <button onClick={handleSearch}>
          <img src={Search} alt="Search" />
        </button>
      </S.SearchBar>
    </S.NavbarContainer>
  );
};

export default Navbar;
