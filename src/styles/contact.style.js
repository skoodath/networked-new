import { FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import { device } from "./device";

export const StyledGetInvolvedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 10%;
  background-color: #f9f9f9;
  @media ${device.laptop} {
    flex-direction: column;
    height: fit-content ;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  width: 100%;
  @media ${device.laptop} {
    max-width: 968px;
  }
`;

export const StyledGetInvolved = styled.p`
  width: 60%;
  margin: 0 auto;
  letter-spacing: normal;
  line-height: 1.6;
  font-size: 1rem;
  justify-self: flex-start;
  align-self: flex-start;
`;

/* Email contact styling */

export const EmailTitle = styled.h5`
  color: #272727;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  border-bottom: 1px solid #272727;
`;

export const ContactLinks = styled.article`
  color: #272727;
  padding: 1em 0;
  margin: 2rem 0 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyEmail = styled.span`
  color: #272727;
  display: flex;
  justify-content: center;
`;

export const MailIcon = styled(FaEnvelope)`
  fill: #ffd54d;
  height: 1.5rem;
  width: 1.5rem;
  display: inline-block;
  margin: 0 1rem 0 0;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto 0;
  @media ${device.laptop} {
    width: 50vw;
    max-width: 600px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 0;
  position: relative;
  border-radius: 5px;

  span {
    color: #ff0000;
    display: block;
    transition-property: color, height;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
  }
`;
export const InputFields = styled.input`
  padding: 0.2rem;
  width: 100%;
  border-radius: 3px;
  border: none;
  background-color: #fff7df;
  font-size: 1rem;
  display: block;
  position: relative;
  transition-timing-function: ease-in;
  transition-property: border-left;
  transition-duration: 0.5s;
  transform-origin: left center;
  border-left: 5px solid transparent;
  resize: none;
  &:focus {
    outline: none;
    background: #fff;
    border-left: 5px solid #ffd54d;
  }
`;

export const InputLabels = styled.label`
  font-size: 0.9rem;
  z-index: 1;
  margin: 0 0 0 0.2rem;
  pointer-events: none;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  color: #272727;
`;

export const SendButton = styled.button`
  border: none;
  background-color: #ffd54d;
  padding: 0.2rem 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  cursor: pointer;
  margin: 1rem 0 0 0;
  border-radius: 5px;
  transition: background-color 0.7s ease-in-out;
  &:hover {
    background-color: #ffd54dab;
  }
  &:active {
    font-size: 1.2rem;
    padding: 0.25rem 0.55rem;
  }
`;