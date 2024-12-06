import { useState } from "react";
import * as S from "./ReviewDetail.style";
import DropdownDownSvg from "../../../assets/icon/dropdown-down-14x8.svg";
import DropdownUpSvg from "../../../assets/icon/dropdown-up-14x8.svg";
import CheckSvg from "../../../assets/icon/check-11x10.svg";
import StarPng from "../../../assets/icon/star-filled-25x26.png";

export default function FilterComp({
  ratingCount,
  isChecked,
  setIsChecked,
  dropdownTitle,
  btnWidth,
}) {
  const [isSelected, setIsSelected] = useState(false);

  // 추천순|최신순 정렬
  const handleClickBtn = () => {
    setIsSelected(!isSelected);
  };

  // 별 필터
  const handleCheck = (num) => {
    setIsChecked((prevData) => ({
      ...prevData,
      [num]: !isChecked[num],
    }));
  };
  const handleCheckAll = (num) => {
    setIsChecked({
      [1]: !isChecked[num],
      [2]: !isChecked[num],
      [3]: !isChecked[num],
      [4]: !isChecked[num],
      [5]: !isChecked[num],
      [6]: !isChecked[num],
    });
  };

  return (
    <>
      <S.DropdownContainer>
        <S.DropdownBtn onClick={handleClickBtn} $width={btnWidth}>
          {dropdownTitle}
          <S.DropdownImg src={isSelected ? DropdownUpSvg : DropdownDownSvg} alt="다운" />
        </S.DropdownBtn>

        {/* 목록 */}
        {isSelected && (
          <S.CheckListContainer $width={btnWidth}>
            <S.CheckItem onClick={() => handleCheckAll(6)}>
              전체
              <S.CheckBox $isChecked={isChecked[6]} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>

            <S.CheckItem onClick={() => handleCheck(5)}>
              <S.StarIcon src={StarPng}></S.StarIcon>
              5({ratingCount[5]})
              <S.CheckBox $isChecked={isChecked[5]} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>

            <S.CheckItem onClick={() => handleCheck(4)}>
              <S.StarIcon src={StarPng}></S.StarIcon>
              4({ratingCount[4]})
              <S.CheckBox $isChecked={isChecked[4]} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>

            <S.CheckItem onClick={() => handleCheck(3)}>
              <S.StarIcon src={StarPng}></S.StarIcon>
              3({ratingCount[3]})
              <S.CheckBox $isChecked={isChecked[3]} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>

            <S.CheckItem onClick={() => handleCheck(2)}>
              <S.StarIcon src={StarPng}></S.StarIcon>
              2({ratingCount[2]})
              <S.CheckBox $isChecked={isChecked[2]} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>

            <S.CheckItem onClick={() => handleCheck(1)}>
              <S.StarIcon src={StarPng}></S.StarIcon>
              1({ratingCount[1]})
              <S.CheckBox $isChecked={isChecked[1]} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>
          </S.CheckListContainer>
        )}
      </S.DropdownContainer>
    </>
  );
}
