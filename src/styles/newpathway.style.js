import styled from "styled-components";
import { device } from "./device";

export const PathwayWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 3rem 0 0 0;
`;

export const PathwayList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  max-width: 400px;
  justify-content: flex-start;
  @media ${device.laptop} {
    margin: 0 auto;
    max-width: 800px;
  }
  @media ${device.laptopLG} {
    margin: 0 auto;
    max-width: 960px;
  }
`;

export const PathwayImgWrap = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  //background-color: #03243C15;
  border: 1px solid #5e4800;
  @media ${device.laptop} {
    width: 70px;
    height: 70px;
    margin: 0;
  }
`;

export const PathwayImg = styled.img`
  display: block;
  height: 70%;
`;

export const PathwayText = styled.p`
  padding: 0;
  height: 100%;
  display: flex;
  margin: 0 auto;
  letter-spacing: normal;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  text-align: center;
  @media ${device.laptop} {
    margin: 1rem 0 0 0;
  }
`;

export const PathwayCount = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background-color: #03243c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  margin: 1rem 0 0 1rem;
`;
export const PathwayOverlay = styled.div`
  position: absolute;
  background-color: #ffde70;
  //border: 1px solid #ffde70;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 90%;
  border-radius: 3px;
  /* clip-path: polygon(0% 100%, 4% 100%, 0% 0%, 0% 0%); */
  /* clip-path: polygon(0% 10%, 1% 20%, 3% 30%, 5% 0%); */
`;

export const PathwayListItem = styled.li`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto 1rem;
  padding: 2rem 1rem;
  font-size: 0.8rem;
  background-color: #ffffff;
  position: relative;
  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
  border: 1px solid transparent;
  border-radius: 3px;
  overflow: hidden;
  /* &:nth-child(odd) {
    border-top: 3px solid transparent;
    border-left: 3px solid #03243c50;
    border-bottom: 3px solid #03243c50;
    border-radius: 0 0 0 30px; */
  /* &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    background-color: transparent;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-left: 10px solid #03243c;
    border-right: 8px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    z-index: 3;
  } */
  /* ${PathwayCount} {
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
    } */
  /* }
  &:nth-child(even) {
    border-top: 3px solid transparent;
    border-right: 3px solid #03243c50;
    border-bottom: 3px solid #03243c50;
    border-radius: 0 0 30px 0;
    flex-direction: row-reverse;
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 1px;
      background-color: transparent;
      bottom: 1px;
      left: 0;
      transform: translate(10px, 11px);
      border-right: 10px solid #03243c;
      border-left: 8px solid transparent;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      z-index: 3;
    }
    ${PathwayCount} {
      right: 0;
      top: 0;
      transform: translate(50%, -50%);
    }
  } */
  /* &:last-child {
    &::after {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      box-shadow: 0 0 0 3px #03243c, 0 0 0 8px #fff, 0 0 0 8px #fff,
        0 0 0 5px #03243c;
      background-color: #fff;
      border: none;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      transform: translate(50%, 50%);
    }
  } */

  @media ${device.laptop} {
    max-width: 300px;
    padding: 1.1rem 0.5rem;
    /* &:nth-child(odd) {
      border-top: 3px solid #03243c50;
      border-left: 3px solid #03243c50;
      border-right: none;
      border-bottom: 3px solid #03243c50;
      border-radius: 30px 0 0 30px;
      flex-direction: column-reverse;
      margin: 0 auto 0 0;
      &::after {
        transform: translate(-5px, 11px);
      }
      ${PathwayCount} {
        left: 100%;
        top: 0;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(even) {
      border-top: 3px solid #03243c50;
      border-left: 3px solid transparent;
      border-right: 3px solid #03243c50;
      border-bottom: 3px solid #03243c50;
      border-radius: 0 30px 30px 0;
      flex-direction: column-reverse;
      margin: 0 0 0 auto;
      &::after {
        transform: translate(5px, 11px);
      }
      ${PathwayCount} {
        right: 100%;
        top: 0;
        transform: translate(50%, -50%);
      }
    }
    &:last-child {
      &::after {
        transform: translate(-50%, 50%);
      }
    }
  }*/
    /* @media ${device.laptopLG} {
    max-width: 480px;
    padding: 1.1rem 0.5rem;
    &:nth-child(odd) {
      border-top: 3px solid #03243c50;
      border-left: 3px solid #03243c50;
      border-right: none;
      border-bottom: 3px solid #03243c50;
      border-radius: 30px 0 0 30px;
      flex-direction: column;
      margin: 0 auto 0 0;
      &::after {
        transform: translate(-10px, 11px);
      }
      ${PathwayCount} {
        left: 100%;
        top: 0;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(even) {
      border-top: 3px solid #03243c50;
      border-left: 3px solid transparent;
      border-right: 3px solid #03243c50;
      border-bottom: 3px solid #03243c50;
      border-radius: 0 30px 30px 0;
      flex-direction: column;
      margin: 0 0 0 auto;
      &::after {
        transform: translate(10px, 11px);
      }
      ${PathwayCount} {
        right: 100%;
        top: 0;
        transform: translate(50%, -50%);
      }
    }
    &:last-child {
      &::after {
        transform: translate(-50%, 50%);
      }
    }*/
  }
`;
