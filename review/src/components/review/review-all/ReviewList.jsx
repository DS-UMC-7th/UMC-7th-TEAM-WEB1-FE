import ReviewCard from "./ReviewCard";

export default function ReviewList() {
  return (
    <>
      <ReviewCard
        reviewTitle="한 입 크기로 잘라먹는 Next.js(15+)"
        reviewClass="인프런"
        reviewName="이정환"
        reviewDate="2024.03.08"
        reviewContent="제빵일을 하고있지만 구움과자의 섬세함을 배우려면 기초부터 잘 알아야하는데
        선생님의 스콘 클래스를 듣고나면 혼자 해보면서 ‘왜 이렇게 해야하지?‘ 궁금했던 점을 다
        알려주세요. 그래서 다른 유튜브나 인스타에서 보이는 레시피를 보아도 기준점이 생겼어요 :)
        너무 흔하지도, 유행을 따라가지도 않는 맛을 골라주시고 좋은 재료를 사용해서 적당히 달고
        고소한 버터의 맛이 잘 살아있는 스콘을 경험 할 수 있었어요. 홈베이킹용으로도 사업자용으로도
        최고의 수업입니다"
        reviewStarNum={4}
      />
      <ReviewCard
        reviewTitle="두 입 크기로 잘라먹는 Next.js(15+)"
        reviewClass="클래스101"
        reviewName="이정인"
        reviewDate="2024.03.06"
        reviewContent="무조건 들어야하는 클래스!!! 제 구움과자 스킬은 선생님 클래스를 듣기 전과 후로
        나뉘어요."
        reviewStarNum={2}
      />
    </>
  );
}
