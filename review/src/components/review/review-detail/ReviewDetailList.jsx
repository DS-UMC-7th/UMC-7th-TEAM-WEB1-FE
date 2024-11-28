import * as S from "./ReviewDetail.style";
import ReviewDetailRating from "./ReviewDetailRating";
import ReviewDetailFilter from "./ReviewDetailFilter";
import ReviewDetailCard from "./ReviewDetailCard";
import ArrowLeftSvg from "../../../assets/icon/arrow-left-10x16.svg";
import ArrowRightSvg from "../../../assets/icon/arrow-right-10x16.svg";

export default function ReviewDetailList() {
  return (
    <>
      {/* 별점 통계 */}
      <ReviewDetailRating />
      {/* 필터링 드롭다운&추천순|최신순 */}
      <ReviewDetailFilter />
      {/* 맵함수 */}
      <S.ReviewList>
        <ReviewDetailCard
          reviewStarNum={"4"}
          reviewLikeNum={"4"}
          reviewDate={"2024.05.27"}
          reviewtTerm={"일주일 이내"}
          reviewContent={
            "좋았던 부분이 정말 너무 많지만 그중 최고는 전적으로 모든 배움의 과정을 스스로 경험할 수 있다는 점이었습니다!"
          }
        />
        <ReviewDetailCard
          reviewStarNum={"5"}
          reviewLikeNum={"8"}
          reviewDate={"2024.05.27"}
          reviewtTerm={"일주일 이내"}
          reviewContent={
            "대부분의 클래스가 기본적인 레시피를 제공하긴 하지만, 대개 수업 시간을 고려해 미리 조색을 해놓는 등 수강생 입장에선 처음에 이해가 되어도 돌아서면 잘 감이 잡히지 않는 과정으로 운영되는 경우가 많은데요. 작업 시간, 농도나 점도, 색감 등 실무에서 제품에 정말 큰 영향을 주는 감각들을 1부터 10까지 꼼꼼하게 경험할 수 있었습니다. 이 업계에 입문하며 정말 많은 배움을 얻어간 선생님의 수업이기에 강추합니다!"
          }
        />
      </S.ReviewList>

      <S.PagenationContainer>
        <S.ArrowImg src={ArrowLeftSvg} alt="이전 페이지" />
        <S.PageNum $isSelected={true}>1</S.PageNum>
        <S.PageNum $isSelected={false}>2</S.PageNum>
        <S.PageNum $isSelected={false}>3</S.PageNum>
        <S.PageNum $isSelected={false}>4</S.PageNum>
        <S.ArrowImg src={ArrowRightSvg} alt="다음 페이지" />
      </S.PagenationContainer>
    </>
  );
}
