import React from "react";
import { PaddingContainer, IconContainer, FlexContainer } from "stcomponents/common/containers";
import { Heading, ParaText } from "stcomponents/common/typography";
import { FaGithub } from "react-icons/fa";
import { ProjectImage, ProjectImageContainer, TechStackCard } from "stcomponents/sections/projectSection.styled";
import { Button } from "stcomponents/common/button";
import { Iproject } from "data/projects";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "motion/motion";

interface IProps {
  data: Iproject;
}

const Project = ({ data }: IProps) => {
  const onClickProjectImg = () => {
    window.open(data.project_url, "_blank");
  };

  return (
    <FlexContainer $fullwidthchild>
      <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible">
        <FlexContainer $align="center" $gap="1rem" $responsiveFlex>
          <Heading size="h3" as="h3" $bottom="1rem">
            {data.project_name}
          </Heading>
          <IconContainer as="a" href={data.github_url} target="_blank" color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer $top="1rme">
          <FlexContainer $gap="1rem" style={{ flexWrap: "wrap" }}>
            {data.tech_stack.map((tech) => (
              <TechStackCard key={tech}>{tech}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText $top="1.5rem" $bottom="2rem">
          {data.project_desc}
        </ParaText>
        <Button as="a" href={data.project_url} target="_blank">
          Visit WebSite
        </Button>
      </motion.div>
      <ProjectImageContainer
        as={motion.div}
        onClick={onClickProjectImg}
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
      >
        <ProjectImage src={data.project_img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
