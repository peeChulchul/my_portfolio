import { back_skills, fron_skills } from "data/skills";
import React from "react";
import { PaddingContainer, IconContainer } from "stcomponents/common/containers";
import { Heading, BlueText } from "stcomponents/common/typography";
import { SkillsCard, SkillsCardContainer } from "stcomponents/sections/skillSection.styled";
function SkillSection() {
  return (
    <PaddingContainer $top="15%" $bottom="10%" $left="3%" id="Skills">
      <Heading size="h2" as="h2">
        My <BlueText>Skills</BlueText>
      </Heading>
      <Heading size="h4" as="h4" $top="1.5rem" $bottom="1.5rem">
        Front-end
      </Heading>
      <SkillsCardContainer>
        {fron_skills.map((skill) => (
          <SkillsCard>
            <IconContainer size="5rem" color="blue">
              <skill.icon />
            </IconContainer>
            <Heading as="h4" size="h4">
              {skill.tech}
            </Heading>
          </SkillsCard>
        ))}
      </SkillsCardContainer>
      <Heading size="h4" as="h4" $top="1.5rem" $bottom="1.5rem">
        Back-end
      </Heading>
      <SkillsCardContainer>
        {back_skills.map((skill) => (
          <SkillsCard>
            <IconContainer size="5rem" color="blue">
              <skill.icon />
            </IconContainer>
            <Heading as="h4" size="h4">
              {skill.tech}
            </Heading>
          </SkillsCard>
        ))}
      </SkillsCardContainer>
    </PaddingContainer>
  );
}

export default SkillSection;
