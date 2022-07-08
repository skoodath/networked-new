import React, { useState } from "react";
import { Menu, MenuLinks, CloseButton, MenuWrapper, Hamburger } from "../../styles/menu.style";
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";

const menu = ["about", "fellowship", "seasons"]

const MenuPage = () => {

  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    if(showMenu){
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  return (
    <>
    <MenuWrapper onClick={handleMenu}>
      <Hamburger />
    </MenuWrapper>
    <Menu show={showMenu}>
      <MenuLinks to="/" onClick={handleMenu}>
          home
      </MenuLinks>
      {menu.map(m => (
        <MenuLinks
          key={m}
          to={`/${m}`}
          onClick={handleMenu}
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
        onClick={handleMenu}
      >
        Contact
      </MenuLinks>
      <CloseButton onClick={handleMenu}>Close{" "} <MdClose /></CloseButton>
    </Menu>
    </>
  );
};

export default MenuPage;
