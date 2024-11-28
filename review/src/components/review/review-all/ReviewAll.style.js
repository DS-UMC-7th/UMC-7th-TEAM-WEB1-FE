import styled, { css } from "styled-components";
import color from "../../../styles/color";
import font from "../../../styles/font";

// common
export const SpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// ReviewFilter
export const ReviewFilterContainer = styled.div`
  padding: 4rem 12.4rem 9rem 12.4rem;
  ${SpaceBetween}
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const DropdownContainer = styled.div`
  position: relative;
  width: ${(props) => props.$width};
`;
// ReviewFilter - 컴포넌트 off
export const DropdownBtn = styled.button`
  position: relative;

  margin-right: 1.5rem;
  padding: 1rem 2rem;
  width: ${(props) => props.$width};

  background-color: ${color.primary_main};
  border: none;
  border-radius: 2.4rem;

  ${font.eli_medium_20}
  color: ${color.white};

  z-index: 2;
  cursor: pointer;
`;
export const DropdownImg = styled.img`
  margin-left: 1rem;
  width: 1.4rem;
  height: 0.8rem;
`;
// ReviewFilter - 컴포넌트 on
export const CheckListContainer = styled.div`
  position: absolute;
  top: 2.1rem;
  left: 0;

  padding: 2.3rem 1.1rem 2.1rem 1.1rem;
  width: ${(props) => props.$width};

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${color.white};
  border: 1px solid ${color.primary_main};
  border-radius: 0 0 2rem 2rem;

  box-shadow: 0px 7px 5.7px 0px rgba(0, 0, 0, 0.16);
  z-index: 1;
`;
export const CheckItem = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  ${SpaceBetween}

  color: ${color.black};
  ${font.eli_medium_14}

  cursor: pointer;
`;
export const CheckBox = styled.div`
  margin-left: 0.6rem;
  width: 1.8rem;
  height: 1.8rem;

  background-color: ${color.grayscale_f1};
  border-radius: 0.3rem;

  background-image: url(${(props) => props.$isChecked && props.$imgUrl});
  background-repeat: no-repeat;
  background-position: center;
`;
// ReviewFilter - 추천순/최신순
export const AlignText = styled.p`
  margin-left: 0.5rem;

  ${font.eli_light_20}
  color: ${(props) => (props.$isSelected ? color.primary_main : color.grayscale_6c)}; //

  cursor: pointer;
`;

// ReviewCard
export const ReviewCardContainer = styled.div`
  margin-bottom: 5.5rem;
  padding: 6.2rem 12.4rem;

  border-top: 1px solid ${color.primary_main};
  border-bottom: 1px solid ${color.primary_main};
  background-color: ${color.review_bg};

  cursor: pointer;
`;

export const ReviewMainContainer = styled.div`
  ${SpaceBetween}
`;
export const ReviewClassTitle = styled.p`
  ${font.eli_medium_24}
  color: ${color.primary_main};
  line-height: 124.9%;
  letter-spacing: 0.48px;
`;
export const ReviewStarList = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ReviewStar = styled.img`
  width: 2.5rem;
  height: 2.6rem;
`;

export const ReviewSubContainer = styled(ReviewMainContainer)`
  margin-top: 1rem;
`;
export const ReviewInfoText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ReviewInfoTextLeft = styled.p`
  margin-right: 1.3rem;

  ${font.eli_medium_15}
  line-height: 124.9%;
  letter-spacing: 0.3px;
`;
export const ReviewInfoTextRight = styled.p`
  ${font.eli_medium_15}
  line-height: 124.9%;
  letter-spacing: 0.3px;
`;

export const ReviewContentsContainer = styled.div`
  margin-top: 2.6rem;
  padding-right: 18.5rem;

  ${font.pre_medium_18}
  line-height: 176%;
  letter-spacing: 0.36px;
`;
