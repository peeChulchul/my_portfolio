import React from "react";
import { PaddingContainer, FlexContainer } from "stcomponents/common/containers";
import { AiOutlineClose } from "react-icons/ai";
import { MenuIcon, MenuItem, NevMeunContainer } from "stcomponents/sections/navbar.styled";

interface IProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navmenu = ({ setOpenMenu }: IProps) => {
  return (
    <NevMeunContainer>
      <PaddingContainer $left="5%" $right="5%" $top="2rem">
        <FlexContainer $justify="flex-end" $responsiveFlex>
          <MenuIcon onClick={() => setOpenMenu(false)}>
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>

      <PaddingContainer $top="8%">
        <FlexContainer direction="column" $align="center" $responsiveFlex>
          <MenuItem href="#Home" onClick={() => setOpenMenu(false)}>
            Home
          </MenuItem>
          <MenuItem href="#Skills" onClick={() => setOpenMenu(false)}>
            My Skills
          </MenuItem>
          <MenuItem href="#Projects" onClick={() => setOpenMenu(false)}>
            My Project
          </MenuItem>
          <MenuItem href="#Contact" onClick={() => setOpenMenu(false)}>
            My Contact
          </MenuItem>
        </FlexContainer>
      </PaddingContainer>
    </NevMeunContainer>
  );
};

export default Navmenu;
