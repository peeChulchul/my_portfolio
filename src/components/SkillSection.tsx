import { back_skills, fron_skills } from "data/skills";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInTop } from "motion/motion";
import React from "react";
import { PaddingContainer, IconContainer } from "stcomponents/common/containers";
import { Heading, BlueText } from "stcomponents/common/typography";
import { SkillsCard, SkillsCardContainer } from "stcomponents/sections/skillSection.styled";
function SkillSection() {
  return (
    <PaddingContainer
      $top="15%"
      $bottom="10%"
      $right="3%"
      $left="3%"
      id="Skills"
      $responsiveLeft="1rem"
      $responsiveRight="1rem"
      $responsiveTop="8rem"
    >
      <Heading size="h2" as="h2">
        My <BlueText>Skills</BlueText>
      </Heading>
      <Heading size="h4" as="h4" $top="1.5rem" $bottom="1.5rem">
        Front-end
      </Heading>
      <SkillsCardContainer as={motion.div} variants={fadeInTop} initial="hidden" whileInView="visible">
        {fron_skills.map((skill) => (
          <SkillsCard key={skill.tech}>
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
      <SkillsCardContainer as={motion.div} variants={fadeInTop} initial="hidden" whileInView="visible">
        {back_skills.map((skill) => (
          <SkillsCard key={skill.tech}>
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
