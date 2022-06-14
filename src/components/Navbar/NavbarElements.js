import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 100px;
  position: relative;
  display: flex;
  float: right;
  justify-content: space-between;
  padding: 0.15rem calc((100wv-1000px) / 2);
  z-index: 10;
`;

export const NavLogo = styled.nav`
  height: 100px;
  position: relative;
  display: flex;
  float: Left;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  float: right;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    color: #ff4545;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;
    color: #ff4545;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const button = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  // font-weight: 609;
  padding-left: 50px;
  padding: 30px 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const NavMenuActive = styled.div`
// background: #6668f4;
// left :0;
// opacity:1;
// transition: all 0.5s ease;
// z-index:1;
// `;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: #ffdcdc;
  padding: 4px 15px;
  font-size: 15px;
  align-items: center;
  font-weight: bolder;
  color: #ff4545;

  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #741327;
    color: #fff5f5;
  }
`;
