import styled from 'styled-components';
import * as S from "../components/header/NavBar.style";
import FooterImage from "../assets/image/footer_logo.png";

const Footer = () => {
  return (
    <FooterContainer>
        <S.Logo to="/">
            <img src={FooterImage} alt="Footer_Logo" />
        </S.Logo>
        <FooterLinks>
            <a href="/privacy">개인정보처리방침</a>
            <a href="/terms">이용약관</a>
            <a href="/no-email">이메일무단수집거부</a>
            <a href="/sitemap">사이트맵</a>
        </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #f9f9f9;
  padding: 3rem;
  justify-content: space-between;
  align-items: center;
  height: 240px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 35px;

  a {
    text-decoration: none;
    color: #333;
  }
`;
