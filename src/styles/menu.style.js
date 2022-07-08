import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "./device";
import { MdMenu } from "react-icons/md";

/* Menu Style */

export const Menu = styled.nav`
  margin: 0 0 0 auto;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100vh;
  background-color: #242424;
  position: fixed;
  top: 0;
  right: 0;
  visibility: ${({show}) => show ? "visible" : "hidden"};
  @media ${device.laptop} {
    flex-direction: row;
    position: relative;
    visibility: visible;
    align-items: flex-end;
    justify-content: flex-end;
    height: auto;
    background-color: #fff;
  }
`;

/* Menu Item Style */

export const MenuLinks = styled(NavLink)`
  position: relative;
  cursor: pointer;
  color: #fff;
  text-transform: capitalize;
  border: 2px solid transparent;
  letter-spacing: 1px;
  display: block;
  font-size: 1.5rem;
  margin: 0 0 2rem 0;
  &::first-letter {
    font-size: 1.8rem;
    font-weight: 700;
    color: #dfaa00;
  }
  &:visited{
    color: #fff;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    z-index: 100;
  }
  &:hover {
    &::after {
      width: 100%;
      left: 0;
      bottom: -2px;
      z-index: 100;
      border-bottom: 4px solid #ffd54d;
      transform-origin: bottom center;
      transition: width 0.5s ease-in-out;
    }
  }
  @media ${device.laptop} {
    color: #272727;
    margin: 0 0 0 1rem;
    &:visited{
      color: #272727;
    }
    font-size: 1.2rem;
    &::first-letter {
    font-size: 1.5rem;
  }
  }
`;

export const MenuWrapper = styled.span`
  margin: 0 0 0 auto;
`

export const Hamburger = styled(MdMenu)`
  
  font-size: 2.5rem;
  @media ${device.laptop} {
    display: none;
  }
`;

export const CloseButton = styled.span`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg{
    fill: #fff;
    font-size: 1.5rem;
  }
  @media ${device.laptop}{
    display: none;
  }
`