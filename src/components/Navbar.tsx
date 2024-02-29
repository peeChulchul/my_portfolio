import React, { useEffect, useState } from "react";
import { FlexContainer, PaddingContainer, Container, IconContainer } from "stcomponents/common/containers";
import { GiHamburgerMenu } from "react-icons/gi";
import { theme } from "style/theme";
import { Logo, MenuIcon, NavbarContainer } from "stcomponents/sections/navbar.styled";
import Navmenu from "./Navmenu";
import { AnimatePresence } from "framer-motion";
import { BlueText } from "stcomponents/common/typography";

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
    <NavbarContainer $bgColor={sticky ? theme.colors.primary : "transparent"}>
      <PaddingContainer
        $left="3%"
        $right="3%"
        $top="1.2rem"
        $bottom="1.2rem"
        $responsiveLeft="1rem"
        $responsiveRight="1rem"
      >
        <Container>
          <FlexContainer $justify="space-between" $responsiveFlex>
            <Logo>
              H.C <BlueText>Proptfolio</BlueText>
            </Logo>

            <MenuIcon onClick={() => setOpenMenu(true)}>
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>
        <AnimatePresence>{openMenu && <Navmenu setOpenMenu={setOpenMenu} />}</AnimatePresence>
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
