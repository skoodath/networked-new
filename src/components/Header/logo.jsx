import React from "react";
import { Title } from "../../styles/header.style";
import networkedtype from "../../assets/images/netedtype.svg";

const Logo = () => (
  <Title to="home" smooth={true} offset={-100} duration={500}>
    <img src={networkedtype} alt="networkED logo" />
  </Title>
);

export default Logo;
