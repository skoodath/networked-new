import React from "react";
import { Menu, MenuLinks } from "../../styles/menu.style";
import { Link } from "react-scroll";

const menu = ["about", "fellowship", "seasons"]

const MenuPage = ({ scroll }) => {
  return (
    <Menu>
      <MenuLinks to="/">
          home
      </MenuLinks>
      {menu.map(m => (
        <MenuLinks
          key={m}
          to={`/${m}`}
        >
        {m}
        </MenuLinks>
      ))}
      <MenuLinks
        as={Link}
        to="contact"
        smooth={true} 
        offset={-100} 
        duration={500}
      >
        Contact
      </MenuLinks>
    </Menu>
  );
};

export default MenuPage;
