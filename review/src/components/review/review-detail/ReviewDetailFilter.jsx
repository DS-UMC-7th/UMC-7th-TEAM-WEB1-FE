import * as S from "./ReviewDetail.style";
import FilterComp from "./FilterComp";

export default function ReviewDetailFilter({
  ratingCount,
  isFilterChecked,
  setIsFilterChecked,
  alignSelected,
  setAlignSelected,
}) {
  const handleClickAlignBtn = (num) => {
    setAlignSelected(num);
  };

  return (
    <>
      <S.ReviewFilterContainer>
        <S.FlexContainer>
          <FilterComp
            ratingCount={ratingCount}
            isChecked={isFilterChecked}
            setIsChecked={setIsFilterChecked}
            dropdownTitle="전체"
            btnWidth="11.2rem"
          />
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
