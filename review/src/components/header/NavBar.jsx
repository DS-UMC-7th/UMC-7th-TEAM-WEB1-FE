import React, { useState } from "react";
import * as S from "./NavBar.style.js";
import LogoImage from "../../assets/image/logo.png";
import Search from "../../assets/image/search.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      try {
        const response = await fetch(
          `http://3.38.66.123:3000/api/lectures/search?keyword=${encodeURIComponent(
            searchTerm
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("검색 결과를 가져오는 데 실패했습니다.");
        }

        const data = await response.json();
        console.log("검색 결과:", data);

        navigate("/review/list", { state: { results: data.result } });
      } catch (error) {
        console.error("검색 오류:", error.message);
      }
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
