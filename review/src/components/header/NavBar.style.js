import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: white; 
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

export const NavButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavButton = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: white; 
`;