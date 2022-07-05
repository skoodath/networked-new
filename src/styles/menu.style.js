import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "./device";

/* Menu Style */

export const Menu = styled.nav`
  color: #272727;
  align-items: center;
  margin: 0 0 0 auto;
  z-index: 999;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media ${device.laptop} {
    margin: 0 0 0 auto;
  }
`;

/* Menu Item Style */

export const MenuLinks = styled(NavLink)`
  position: relative;
  margin: 0 0 0 1rem;
  cursor: pointer;
  color: #272727;
  text-transform: capitalize;
  border: 2px solid transparent;
  letter-spacing: 1px;
  display: block;
  font-size: 0.9rem;
  &::first-letter {
    font-size: 1.2rem;
    font-weight: 900;
    color: #dfaa00;
  }
  &:visited{
    color: #272727;
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
    font-size: 1.2rem;
    &::first-letter {
    font-size: 1.5rem;
  }
  }
`;