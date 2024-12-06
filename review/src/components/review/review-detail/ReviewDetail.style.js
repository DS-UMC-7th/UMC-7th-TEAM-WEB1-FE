import styled from "styled-components";
import color from "../../../styles/color";
import font from "../../../styles/font";

// ReviewDetailRating
// ReviewDetailRating
// ReviewDetailRating
export const StarRatingContainerBox = styled.div`
  margin: 8rem 4% 0 4%;
  padding: 7.4rem 2.7vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-top: 1px solid ${color.grayscale_d9};
  border-bottom: 1px solid ${color.grayscale_d9};
`;
export const StarRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// 별점 - 왼쪽
export const RatingScore = styled.h4`
  ${font.eli_medium_40}
`;
export const ReviewStarList = styled.div`
  margin-top: 1.6rem;

  display: flex;
`;
export const ReviewStar = styled.img`
  width: 4.6rem;
  height: 4.8rem;
`;
export const RatingNum = styled.p`
  margin-top: 2rem;
  ${font.eli_medium_20}
`;
export const WriteReviewBtn = styled.button`
  margin-top: 3.2rem;
  padding: 0.9rem 2rem;

  border-radius: 20px;
  border: 1px solid ${color.primary_main};
  background: ${color.review_btn_bg};
  box-shadow: 0px 4px 5.7px 0px rgba(0, 0, 0, 0.15);

  ${font.eli_medium_20}

  cursor: pointer;
`;
// 별점 - 오른쪽
export const ChartItemContainer = styled.div`
  margin: 0.9rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${font.eli_light_20}
`;
export const ChartText = styled.p`
  padding-left: 1rem;
  width: 12.2rem;
  height: 3.4rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ChartBoxBack = styled.div`
  position: relative;

  margin: 0 1.6rem 0 2.6rem;
  /* width: 46rem; */
  width: 32vw;
  height: 1.5rem;

  border: 0.5px solid ${color.grayscale_88};
  background: ${color.review_btn_bg};
`;
export const ChartBoxFront = styled.div`
  position: absolute;

  width: ${(props) => props.$chartPercent}%;
  height: 100%;

  background: ${color.primary_main};
`;
export const ChartNum = styled.p`
  padding-left: 1rem;
  width: 4.5rem;
  height: 3.4rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// ReviewDetailFilter
// ReviewDetailFilter
// ReviewDetailFilter
export const ReviewFilterContainer = styled.div`
  margin: 4.1rem 4% 0 4%;

  display: flex;
  justify-content: space-between;
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

  display: flex;
  justify-content: space-between;
  align-items: center;

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
export const StarIcon = styled.img`
  margin-right: -1rem;
  width: 1.5rem;
  height: 1.4rem;
`;
// ReviewFilter - 추천순/최신순
export const AlignText = styled.p`
  margin-left: 0.5rem;

  ${font.eli_light_20}
  color: ${(props) => (props.$isSelected ? color.primary_main : color.grayscale_6c)}; //

  cursor: pointer;
`;

// ReviewDetailCard
// ReviewDetailCard
// ReviewDetailCard
export const ReviewList = styled.ul`
  margin-top: 2.1rem;
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
`;
export const ReviewContainer = styled.li`
  margin: 0 4%;
  padding: 4.8rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  border-top: 1px solid ${color.primary_main};
  border-bottom: 1px solid ${color.primary_main};
`;
export const ContainerBetween = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ReviewStarList2 = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ReviewStar2 = styled.img`
  width: 3.5rem;
  height: 3.6rem;
`;
export const LikeBtn = styled.button`
  height: 3.6rem;
  padding: 0 1.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 2rem;
  border: 1px solid ${color.primary_main};
  background: ${color.review_bg};

  ${font.eli_medium_18}

  cursor: pointer;
`;
export const LikeImg = styled.img`
  width: 2rem;
`;
export const ContainerStart = styled.div`
  padding: 0 0.6rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  ${font.eli_medium_15}
`;
export const ReviewContent = styled.p`
  padding: 0 0.6rem;
  padding-right: 17.8rem;

  ${font.pre_medium_18}
  text-align: justify;
  line-height: 176%;
  letter-spacing: 0.36px;
`;

// pagenation
// pagenation
// pagenation
export const PagenationContainer = styled.div`
  margin: 7.5rem 0 12.6rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  ${font.pre_medium_20}
  color: ${color.grayscale_88};
`;
export const ArrowImg = styled.img`
  margin: 0 0.9rem;

  cursor: pointer;
`;
export const PageNum = styled.p`
  width: 2.1rem;
  height: 3.4rem;

  text-align: center;
  line-height: 3.4rem;
  color: ${(props) => props.$isSelected && color.black};

  cursor: pointer;
`;
