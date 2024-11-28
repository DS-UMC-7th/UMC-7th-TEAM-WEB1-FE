import { useNavigate } from "react-router-dom";
import * as S from "./ReviewAll.style";
import StarOnPng from "../../../assets/icon/star-filled-25x26.png";
import StarOffPng from "../../../assets/icon/star-empty-25x26.png";

export default function ReviewCard({
  reviewTitle,
  reviewClass,
  reviewName,
  reviewDate,
  reviewContent,
  reviewStarNum = 5,
}) {
  const navigate = useNavigate();
  const handleMoveToDetail = () => {
    navigate(`/review/detail`);
  };

  return (
    <>
      <S.ReviewCardContainer onClick={handleMoveToDetail}>
        <div>
          <S.ReviewMainContainer>
            <S.ReviewClassTitle>{reviewTitle}</S.ReviewClassTitle>
            <S.ReviewStarList>
              {Array.from({ length: reviewStarNum }, (_, index) => (
                <S.ReviewStar key={index} src={StarOnPng} alt="채워진 별" />
              ))}
              {Array.from({ length: 5 - reviewStarNum }, (_, index) => (
                <S.ReviewStar key={index} src={StarOffPng} alt="빈 별" />
              ))}
            </S.ReviewStarList>
          </S.ReviewMainContainer>
          <S.ReviewSubContainer>
            <S.ReviewInfoText>
              <S.ReviewInfoTextLeft>{reviewClass}</S.ReviewInfoTextLeft>
              <S.ReviewInfoTextLeft>|</S.ReviewInfoTextLeft>
              <S.ReviewInfoTextLeft>{reviewName}</S.ReviewInfoTextLeft>
            </S.ReviewInfoText>
            <S.ReviewInfoTextRight>{reviewDate}</S.ReviewInfoTextRight>
          </S.ReviewSubContainer>
        </div>
        <S.ReviewContentsContainer>{reviewContent}</S.ReviewContentsContainer>
      </S.ReviewCardContainer>
    </>
  );
}
