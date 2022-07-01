import React, { useState } from "react";
import Logo from "./logo";
import { HeaderInner, Headeroverlay, Wrapper } from "../../styles/header.style";
import MenuPage from "../reusable/menu";

const Header = () => {
  const [headerColor, setHeaderColor] = useState(false);

  const setMenu = () => {
    if (window.scrollY > 150) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener("scroll", setMenu);

  return (
    <Wrapper scroll={headerColor}>
      <HeaderInner>
        <Headeroverlay scroll={headerColor}>
          <Logo />
        </Headeroverlay>
        <MenuPage scroll={headerColor} />
      </HeaderInner>
    </Wrapper>
  );
};

export default Header;
