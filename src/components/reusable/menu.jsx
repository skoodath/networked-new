import React from "react";
import { Menu, MenuLinks } from "../../styles/menu.style";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

const MenuPage = ({ scroll }) => {
  return (
    <Menu>
      <MenuLinks
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={300}
        scroll={"scroll"}
        tabIndex="0"
      >
        About
      </MenuLinks>
      <MenuLinks
        to="fellowship"
        spy={true}
        smooth={true}
        offset={-50}
        duration={300}
        scroll={"scroll"}
        tabIndex="0"
      >
        Fellowship
      </MenuLinks>
    </Menu>
  );
};

export default MenuPage;
