import { useState } from "react";
import * as S from "./ReviewAll.style";
import DropdownDownSvg from "../../../assets/icon/dropdown-down-14x8.svg";
import DropdownUpSvg from "../../../assets/icon/dropdown-up-14x8.svg";
import CheckSvg from "../../../assets/icon/check-11x10.svg";

export default function FilterComp({ dropdownTitle, btnWidth }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClickBtn = () => {
    setIsSelected(!isSelected);
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
            <S.CheckItem>
              입문자
              <S.CheckBox $isChecked={true} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>
            <S.CheckItem>
              초급자
              <S.CheckBox $isChecked={false} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>
            <S.CheckItem>
              중급자
              <S.CheckBox $isChecked={false} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>
            <S.CheckItem>
              상급자
              <S.CheckBox $isChecked={false} $imgUrl={CheckSvg}></S.CheckBox>
            </S.CheckItem>
          </S.CheckListContainer>
        )}
      </S.DropdownContainer>
    </>
  );
}
