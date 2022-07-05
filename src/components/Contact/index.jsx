import React from "react";
import {
  StyledGetInvolved,
  StyledGetInvolvedWrapper,
  StyledInnerWrapper,
} from "../../styles/contact.style";
import Contact from "./contactform";
import ContactUs from "./contact";
import { SectionHeader } from "../reusable";

const WhoCan = () => {

  return (
    <>
      <StyledGetInvolvedWrapper name="contact">
        <SectionHeader text={`Get Involved`} />
        <StyledInnerWrapper>
          <StyledGetInvolved>
            Connect with us if interested in knowing how to enhance cognitive
            functions of children using network representations from real world
            experiences.
          </StyledGetInvolved>
          <Contact />
          <ContactUs />
        </StyledInnerWrapper>
      </StyledGetInvolvedWrapper>
    </>
  );
};

export default WhoCan;
