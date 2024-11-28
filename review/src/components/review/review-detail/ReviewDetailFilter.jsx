import { useState } from "react";
import * as S from "./ReviewDetail.style";
import FilterComp from "./FilterComp";

export default function ReviewDetailFilter() {
  const [alignSelected, setAlignSelected] = useState(1);

  const handleClickAlignBtn = (num) => {
    setAlignSelected(num);
  };

  return (
    <>
      <S.ReviewFilterContainer>
        <S.FlexContainer>
          <FilterComp dropdownTitle="전체" btnWidth="11.2rem" />
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
