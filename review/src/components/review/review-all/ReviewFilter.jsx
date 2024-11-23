import * as S from "./ReviewAll.style";
import FilterComp from "./FilterComp";
import { useState } from "react";

export default function ReviewFilterAlign() {
  const [alignSelected, setAlignSelected] = useState(1);

  const handleClickAlignBtn = (num) => {
    setAlignSelected(num);
  };

  return (
    <>
      <S.ReviewFilterContainer>
        <S.FlexContainer>
          <FilterComp dropdownTitle="카테고리" btnWidth="14.2rem" />
          <FilterComp dropdownTitle="난이도" btnWidth="12.3rem" />
          <FilterComp dropdownTitle="수강 기간" btnWidth="14.5rem" />
        </S.FlexContainer>
        <S.FlexContainer>
          <S.AlignText onClick={() => handleClickAlignBtn(1)} $isSelected={alignSelected === 1}>
            추천순
          </S.AlignText>
          <S.AlignText>|</S.AlignText>
          <S.AlignText onClick={() => handleClickAlignBtn(2)} $isSelected={alignSelected === 2}>
            최신순
          </S.AlignText>
        </S.FlexContainer>
      </S.ReviewFilterContainer>
    </>
  );
}
