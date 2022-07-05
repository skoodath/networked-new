import styled from "styled-components";
import { device } from "./device";

/* About Seasons Style */
export const AboutSeasons = styled.section`
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 2rem auto;
  padding: 0;
  @media ${device.laptop} {
    max-width: 968px;
  }
`;

/* Season One styled */

export const SeasonOneContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  img {
    width: 100px;
  }
`;

export const SeasonOneWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${device.laptop} {
    max-width: 700px;
  }
`;

export const StyledSluethPara1 = styled.p`
  margin-top: ${({ margintop }) => (margintop ? "2rem" : 0)};
  margin-bottom: 2rem;
  margin-left: 0;
  margin-right: auto;
  padding: 1rem;
  letter-spacing: normal;
  line-height: 1.6;
  border-radius: 150px;
  background-color: #ffd54d;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  max-width: 400px;
  @media ${device.laptop} {
    font-size: 0.85rem;
    max-width: 400px;
  }
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 1px;
    border-top: 30px solid #ffd54d;
    border-right: 30px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid transparent;
    bottom: -25px;
    left: 20%;
    transform: skewX(-35deg);
  }
`;
export const StyledSluethPara2 = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: 0;
  padding: 1rem;
  letter-spacing: normal;
  line-height: 1.6;
  border-radius: 150px;
  background-color: #ffd54d;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  max-width: 400px;
  @media ${device.laptop} {
    font-size: 0.85rem;
    max-width: 400px;
  }
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 1px;
    border-top: 30px solid #ffd54d;
    border-right: 30px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid transparent;
    bottom: -25px;
    right: 20%;
    transform: skewX(-135deg);
  }
`;

export const ClosingPara = styled.p`
  margin: 0 auto;
  padding: 1rem;
  letter-spacing: normal;
  line-height: 1.6;
  border-radius: 50%;
  border: 2px solid #ffd54d;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  @media ${device.laptop} {
    font-size: 0.9rem;
  }
`;

export const SeasonOneHeader = styled.h2`
  font-size: 1.6rem;
  justify-self: space-around;
`;

/* Season Title styles */

export const SeasonText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const NameYearText = styled.h2`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
`;

/* Season Title styles */

export const UpcomingSeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  @media ${device.laptop} {
    max-height: 750px;
  }
`;

export const UpcomingSeasonsCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 0;
  align-items: center;
  width: 300px;
  position: relative;
  padding: 1rem 0;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.15), -1px -1px 2px rgba(0,0,0,0.15) ;
  overflow: hidden;
  border-radius: 2px;
  &::before {
    position: absolute;
    content: "Coming soon";
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
    background: #ffd54e;
    height: 20px;
    width: 120px;
    top: 20%;
    left: -8%;
    transform: rotate(-45deg);
  }
`;
export const UpcomingImageWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin: 0 1rem;
  img {
    width: 95%;
  }
`;
export const UpcomingSeasonHeader = styled.h3`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;
  font-size: 1.1rem;
  @media ${device.laptop} {
    font-size: 1rem;
  }
`;
