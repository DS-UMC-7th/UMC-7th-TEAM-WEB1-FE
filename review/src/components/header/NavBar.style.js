import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background-color: white;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem; 
`;

export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: gray;
  }

  img {
    width: 100px;
    height: auto;
  }
`;

export const NavButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavButton = styled(Link)`
  color: #6C6C6C;
  text-decoration: none;
  font-size: 20px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: white;
  font-weight: 700;

  &:hover {
    color: gray;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #F1F1F1;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  background-color: #F1F1F1;
  width: 350px;
  justify-content: center;

  input {
    border: none;
    outline: none;
    width: 300px;
    background: transparent;
    font-size: 14px;
    color: #555;

    &::placeholder {
      color: #aaa;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 20px;
    }
  }
`;
