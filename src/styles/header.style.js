import styled from "styled-components";
import { device } from "./device";
import { Link } from "react-scroll";

export const Wrapper = styled.header`
  transition-property: background-color, height;
  transition-timing-function: ease-in-out;
  transition-duration: 0.7s;
  width: 100vw;
  position: relative ;
  @media ${device.laptop} {
    margin: 0 auto;
  }
`;
export const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: ${({ scroll }) => (scroll ? "1px 1px 2px #ffd54d" : "none")};
  z-index: 101;
  padding: 0 5%;
  @media ${device.laptop} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Title = styled(Link)`
  position: relative;
  cursor: pointer;

  img {
    display: block;
    width: 6rem;
    position: relative;
    @media ${device.laptop} {
      width: 5rem;
    }
    @media ${device.desktop} {
      width: 7rem;
    }
  }
`;
