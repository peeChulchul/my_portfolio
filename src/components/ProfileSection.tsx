import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import propfile from "../assets/profile.png";
import { PaddingContainer, FlexContainer, IconContainer } from "stcomponents/common/containers";
import { BlueText, Heading, ParaText } from "stcomponents/common/typography";
import { ProfileImgCard } from "stcomponents/sections/profileSection.styled";
const ProfileSection = () => {
  return (
    <PaddingContainer $left="3%" $right="10%" $top="15%" $bottom="10%" id="Home">
      <FlexContainer $align="center" $fullwidthchild>
        <div>
          <Heading as="h4" size="h4">
            방문해주셔서 감사합니다!
          </Heading>
          <Heading size="h2" as="h2" $top="0.5rem" $bottom="1rem">
            <BlueText> 프론트엔드 개발자</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            김현철입니다.
          </Heading>

          <ParaText as="p" $top="2rem" $bottom="4rem">
            좋은코드작성을 위해 고집없이 좋은코드들을 수용하며 발전해 가는것이 저의 장점입니다.
          </ParaText>
          <FlexContainer gap="20px">
            <IconContainer color="white" size="1.5rem">
              <BsGithub />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <SiVelog />
            </IconContainer>
          </FlexContainer>
        </div>

        <FlexContainer justify="flex-end">
          <ProfileImgCard>
            <img src={propfile} height={350} alt="profile"></img>
          </ProfileImgCard>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default ProfileSection;
