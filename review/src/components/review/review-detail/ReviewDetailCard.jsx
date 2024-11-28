import * as S from "./ReviewDetail.style";
import StarOnPng from "../../../assets/icon/star-filled-25x26.png";
import StarOffPng from "../../../assets/icon/star-empty-25x26.png";
import LikeSvg from "../../../assets/icon/like-25x24.svg";

export default function ReviewDetailCard({
  reviewStarNum = 5,
  reviewLikeNum,
  reviewDate,
  reviewtTerm,
  reviewContent,
}) {
  return (
    <>
      <S.ReviewContainer>
        <S.ContainerBetween>
          <S.ReviewStarList2>
            {Array.from({ length: reviewStarNum }, (_, index) => (
              <S.ReviewStar2 key={index} src={StarOnPng} alt="채워진 별" />
            ))}
            {Array.from({ length: 5 - reviewStarNum }, (_, index) => (
              <S.ReviewStar2 key={index} src={StarOffPng} alt="빈 별" />
            ))}
          </S.ReviewStarList2>
          <S.LikeBtn>
            <S.LikeImg src={LikeSvg} alt="따봉" />
            {reviewLikeNum}
          </S.LikeBtn>
        </S.ContainerBetween>
        <S.ContainerStart>
          <p>{reviewDate}</p>
          <p>공부기간: {reviewtTerm}</p>
        </S.ContainerStart>
        <S.ReviewContent>{reviewContent}</S.ReviewContent>
      </S.ReviewContainer>
    </>
  );
}
