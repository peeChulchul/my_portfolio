import React, { useEffect, useState } from "react";
import { FlexContainer, PaddingContainer, Container, IconContainer } from "stcomponents/common/containers";
import { GiHamburgerMenu } from "react-icons/gi";
import { theme } from "style/theme";
import { Logo, MenuIcon, NavbarContainer } from "stcomponents/sections/navbar.styled";
import Navmenu from "./Navmenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <NavbarContainer bgColor={sticky ? theme.colors.primary : "transparent"}>
      <PaddingContainer $top="1.2rem" $bottom="1.2rem">
        <Container>
          <FlexContainer justify="space-between">
            <Logo>Proptfolio</Logo>

            <MenuIcon onClick={() => setOpenMenu(true)}>
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>
        {openMenu && <Navmenu setOpenMenu={setOpenMenu} />}
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
