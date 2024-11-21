import styled from "styled-components";
import font from "../styles/font";
import color from "../styles/color";

const Reviews = () => {
  return <StyledContent>Reviews Page</StyledContent>;
};

export default Reviews;

const StyledContent = styled.h1`
  height: 100%;
  background-color: white;
  color: black;
  margin-top: 5px;
  color: ${color.primary_main};
  ${font.pre_medium_18}
`;
