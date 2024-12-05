import { useState } from "react";
import styled from "styled-components";
import color from "../../styles/color";

const ImageUpload = ({ onImageUpload }) => {

  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log("올린 파일: ",file);
    if (file) {
      const reader = new FileReader();
      // console.log("reader: ", reader);

      // 파일 데이터를 image state에 저장
      reader.onload = () => {
        setImage(reader.result);
        onImageUpload(reader.result);
      };

      // 브라우저에 띄우기 위한 코드
      reader.readAsDataURL(file);
    }
  }

  return(
    <ImgContainer>
      <p>강의 사진 등록</p>
      <label htmlFor="img">
        { image ? (
          <ClassImg src={image} alt="preview" />
        ) : (
          <Rectangle>+</Rectangle>
        ) }
      </label>
        <Input type='file' accept='image/*' id="img" onChange={handleImageUpload} />
      </ImgContainer>
  );
}

export default ImageUpload;

const ImgContainer = styled.div`
  p {
    margin-bottom: 15px;
  }
`;

const ClassImg = styled.img`
  width: 500px;
  height: 300px;
`;

const Input = styled.input`
  display: none;
`;

const Rectangle = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid ${color.primary_main};
  background-color: transparent;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;