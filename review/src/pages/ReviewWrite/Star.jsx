import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import styled from "styled-components";

const Star = ({ onChange }) => {

  const [rating, setRating] = useState(0); // 별 개수

  const handleClickStars = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    onChange(newRating);  // 부모 컴포넌트로 별점 전달
  }

  return(
    <>
      <p><span>*</span> 별점</p>
        <StarNum>
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} onClick={() => handleClickStars(index)} >
              {rating > index ? (
                <FaStar color="#E55F00" size='40' />
              ) : (
                <FaRegStar size='40' />
              )}
            </span>
          ))}
          <RateNum>{rating === 0 ? (
            <>0</>
          ) : (
            <>{rating}</>
          )}<>/5</></RateNum>
        </StarNum>
    </>
  );
}

export default Star;

const StarNum = styled.div`
  display: flex;
  align-items: center; 
  gap: 5px;
`;

const RateNum = styled.p`
  margin-left: 20px;
  display: flex;
  color: black;
`;