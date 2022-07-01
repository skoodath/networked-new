import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "../device";

export const CTAButton = styled(Link)`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0.3rem 1rem;
  width: 130px;
  border-radius: 5px;
  color: #0036e5;
  border: 2px solid #0036e5;
  margin: 1rem 0 0 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: #0036e5;
    color: #fff;
    transition: background-color 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  @media ${device.laptop} {
    width: 180px;
  }
`;
