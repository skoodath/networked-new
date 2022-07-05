import React from "react";
import Benefit from "./benefits";
import { Styledabout, Aboutus } from "../../styles/about.style";
import { HeaderBig, HeaderSmall } from "../../styles/Reusable/subheader.style";
import { WrapperContainer } from "../../styles/Reusable/wrapperdiv.style";

const About = () => {

  return (
    <WrapperContainer>
      <Styledabout name="about" className=".panel">
        <HeaderSmall>About</HeaderSmall>
        <HeaderBig>networkED</HeaderBig>
        <Aboutus>
          We are an emerging community of researchers, educators and mentors
          passionate about introducing a new way of thinking to children.
        </Aboutus>
        <Aboutus fontsize fontwght paddingleft borderleft>
          Our goal is to create a thriving thought-pool of methods and tools to
          help children master the art of generating insights using networks in
          real world.
        </Aboutus>
        <Benefit />
      </Styledabout>
    </WrapperContainer>
  );
};

export default About;
