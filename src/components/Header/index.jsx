import React, { useState } from "react";
import Logo from "./logo";
import { HeaderInner, Wrapper } from "../../styles/header.style";
import MenuPage from "../reusable/menu";
import { Outlet } from "react-router-dom";

const Header = () => {
  const [headerColor, setHeaderColor] = useState(false);

  const setMenu = () => {
    if (window.scrollY > 50) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener("scroll", setMenu);

  return (
    <Wrapper name="home">
      <HeaderInner scroll={headerColor}>
        <Logo />
        <MenuPage scroll={headerColor} />
        
      </HeaderInner>
      <Outlet />
    </Wrapper>
  );
};

export default Header;
