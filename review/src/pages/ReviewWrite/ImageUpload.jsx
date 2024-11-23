import { useState } from "react";
import styled from "styled-components";

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
    <>
      <p>강의 사진 등록</p>
      <label htmlFor="img">
        { image ? (
          <ClassImg src={image} alt="preview" />
        ) : (
          <Rectangle>+</Rectangle>
        ) }
      </label>
        <Input type='file' accept='image/*' id="img" onChange={handleImageUpload} />
      </>
  );
}

export default ImageUpload;

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
  border: 2px solid #E55F00;
  background-color: transparent;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;