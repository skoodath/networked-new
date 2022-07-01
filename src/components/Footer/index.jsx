import React from "react";
import FooterLogo from "./footerlogo";
import MoreIcons from "./more";
import SocialMedia from "./social";
import Copywrite from "./copywrite";

import {
  Styledfooter,
  StyledFooterInner,
  StyledFooterWrapper,
} from "../../styles/footer.style";

const Footer = () => (
  <Styledfooter>
    <StyledFooterInner>
      <StyledFooterWrapper>
        <MoreIcons />
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <FooterLogo />
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <Copywrite />
        <SocialMedia />
      </StyledFooterWrapper>
    </StyledFooterInner>
  </Styledfooter>
);

export default Footer;
