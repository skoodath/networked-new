import styled from "styled-components";
import { device } from "./device";
import { Link } from "react-scroll";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  /*   display: flex; */
  left: 0;
  right: 0;
  z-index: 99;
  background-color: ${({ scroll }) => (scroll ? "#fff" : "transparent")};
  transition-property: background-color, height;
  transition-timing-function: ease-in-out;
  transition-duration: 0.7s;
  width: 100vw;
  height: 52px;
  box-shadow: ${({ scroll }) => (scroll ? "0 0 4px -1px #ffd54d" : "none")};
  @media ${device.laptop} {
    height: 65px;
    margin: 0 auto;
  }
`;
export const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media ${device.laptop} {
    height: 65px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Headeroverlay = styled.div`
  position: absolute;
  margin-top: ${({ scroll }) => (scroll ? "0" : "-52px")};
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: margin-top 0.2s cubic-bezier(0.98, 0.84, 0.44, 0.001);
  visibility: ${({ scroll }) => (scroll ? "visible" : "hidden")};
  @media ${device.laptop} {
    height: 65px;
    max-width: 1200px;
    margin: ${({ scroll }) => (scroll ? "0 auto" : "-65px auto 0")};
  }
`;

export const Title = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto 0 0;
  justify-self: center;
  z-index: 99;
  cursor: pointer;
  padding: 0 0 0 1rem;
  @media ${device.laptop} {
    margin: 0 auto 0 0;
  }

  img {
    display: block;
    width: 6rem;
    max-width: auto;
    position: relative;
    @media ${device.laptop} {
      width: 5rem;
    }
    @media ${device.desktop} {
      width: 7rem;
    }
  }
`;
