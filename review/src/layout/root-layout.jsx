import Navbar from '../components/header/NavBar.jsx';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer.jsx';

const RootLayout = () => {
    return (
      <>
        <Navbar />
        <MainContent>
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </MainContent>
        <Footer />
      </>
    );
  };
  
export default RootLayout;
  
export const MainContent = styled.div`
    display: flex;
    background-color: white;
    flex: 1;
`;
  
export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background-color: white;
`;