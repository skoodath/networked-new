import styled from "styled-components";
import { device } from "./device";

export const Styledabout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  margin: 5rem auto;
  width: 80%;
  max-width: 968px;
`;

/* About paragraph styling */

export const Aboutus = styled.p`
  margin: 0 0 2rem auto;
  padding-left: ${({ paddingleft }) => (paddingleft ? "1rem" : "0")};
  letter-spacing: 1px;
  position: relative;
  line-height: 1.6;
  text-align: ${({ textalign }) => (textalign ? "right" : "left")};
  font-size: ${({ fontsize }) => (fontsize ? "1.2rem" : "1rem")};
  font-weight: ${({ fontwght }) => (fontwght ? "700" : "400")};
  border-left: ${({ borderleft }) => (borderleft ? "10px solid #ffd54d" : "0")};
  &::before {
    position: ${({ bposition }) => (bposition ? "absolute" : "relative")};
    content: "";
    width: 20%;
    height: 10px;
    background-color: #ffd54d;
    left: 0;
    bottom: -10px;
    z-index: 0;
  }
`;

/* Get involved */

/* Community Benefits Styling */

export const BenefitContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CardWrapper = styled.ul`
  //display: grid;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: flex-start;
  @media ${device.laptop} {
    /* grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat() (12, 1fr); */
  }
`;
export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  margin: 0.4rem 0;
  padding: 0;
  width: 100%;
  height: 320px;
  max-width: 288px;
  border-radius: 5px;
  @media ${device.laptop} {
    width: 350px;
    /* grid-column-start: ${({ colstart }) => colstart};
    grid-column-end: ${({ colend }) => colend};
    grid-row-start: ${({ rowstart }) => rowstart};
    grid-row-end: ${({ rowend }) => rowend}; */
    margin: 0.5rem;
    justify-items: center;
    align-items: center;
  }
`;
export const CardHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  clip-path: circle(60px at center);
  background-color: #ffd54d;
  overflow: auto;
`;

export const CardHeader = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  //align-self: flex-start;
  @media ${device.laptop} {
    font-size: 0.85rem;
  }
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 50%;
`;
export const Overlay = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  p {
    color: #272727;
    font-size: 1rem;
    letter-spacing: 1px;
    text-align: center;

    @media ${device.laptop} {
      font-size: 0.8rem;
    }
  }
`;