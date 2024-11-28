import * as S from "./ReviewDetail.style";
import StarOnPng from "../../../assets/icon/star-filled-25x26.png";
import StarOffPng from "../../../assets/icon/star-empty-25x26.png";

export default function ReviewDetailRating({ reviewStarNum = 4 }) {
  return (
    <>
      <S.StarRatingContainerBox>
        <S.StarRatingContainer>
          <S.RatingScore>4.25</S.RatingScore>
          <S.ReviewStarList>
            {Array.from({ length: reviewStarNum }, (_, index) => (
              <S.ReviewStar key={index} src={StarOnPng} alt="채워진 별" />
            ))}
            {Array.from({ length: 5 - reviewStarNum }, (_, index) => (
              <S.ReviewStar key={index} src={StarOffPng} alt="빈 별" />
            ))}
          </S.ReviewStarList>
          <S.RatingNum>32개의 리뷰가 있습니다.</S.RatingNum>
          <S.WriteReviewBtn>리뷰 작성하기</S.WriteReviewBtn>
        </S.StarRatingContainer>

        <S.StarRatingContainer>
          <S.ChartItemContainer>
            <S.ChartText>아주 좋아요</S.ChartText>
            <S.ChartBoxBack>
              <S.ChartBoxFront $chartPercent={50} />
            </S.ChartBoxBack>
            <S.ChartNum>10</S.ChartNum>
          </S.ChartItemContainer>

          <S.ChartItemContainer>
            <S.ChartText>맘에 들어요</S.ChartText>
            <S.ChartBoxBack>
              <S.ChartBoxFront $chartPercent={30} />
            </S.ChartBoxBack>
            <S.ChartNum>6</S.ChartNum>
          </S.ChartItemContainer>

          <S.ChartItemContainer>
            <S.ChartText>보통이에요</S.ChartText>
            <S.ChartBoxBack>
              <S.ChartBoxFront $chartPercent={15} />
            </S.ChartBoxBack>
            <S.ChartNum>3</S.ChartNum>
          </S.ChartItemContainer>

          <S.ChartItemContainer>
            <S.ChartText>그냥 그래요</S.ChartText>
            <S.ChartBoxBack>
              <S.ChartBoxFront $chartPercent={5} />
            </S.ChartBoxBack>
            <S.ChartNum>1</S.ChartNum>
          </S.ChartItemContainer>

          <S.ChartItemContainer>
            <S.ChartText>별로예요</S.ChartText>
            <S.ChartBoxBack>
              <S.ChartBoxFront $chartPercent={0} />
            </S.ChartBoxBack>
            <S.ChartNum>0</S.ChartNum>
          </S.ChartItemContainer>
        </S.StarRatingContainer>
      </S.StarRatingContainerBox>
    </>
  );
}
