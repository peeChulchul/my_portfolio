import React from "react";
import { PaddingContainer, IconContainer, FlexContainer } from "stcomponents/common/containers";
import { Heading, ParaText } from "stcomponents/common/typography";
import { FaGithub } from "react-icons/fa";
import { ProjectImage, ProjectImageContainer, TechStackCard } from "stcomponents/sections/projectSection.styled";
import { Button } from "stcomponents/common/button";
import { Iproject } from "data/projects";

interface IProps {
  data: Iproject;
}

const Project = ({ data }: IProps) => {
  return (
    <FlexContainer $fullwidthchild>
      <div>
        <FlexContainer $align="center" $gap="1rem" $responsiveFlex>
          <Heading size="h3" as="h3" $bottom="1rem">
            {data.project_name}
          </Heading>
          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer $top="1rme">
          <FlexContainer $gap="1.5rem">
            {data.tech_stack.map((tech) => (
              <TechStackCard key={tech}>{tech}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText $top="1.5rem" $bottom="2rem">
          {data.project_desc}
        </ParaText>
        <Button>Visit WebSite</Button>
      </div>
      <ProjectImageContainer>
        <ProjectImage src={data.project_img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
