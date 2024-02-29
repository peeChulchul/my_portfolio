import { projectDetails } from "data/projects";
import React from "react";
import { PaddingContainer } from "stcomponents/common/containers";
import { Heading, BlueText, ParaText } from "stcomponents/common/typography";
import Project from "./Project";

const ProjectSection = () => {
  return (
    <PaddingContainer
      $top="5%"
      $bottom="5%"
      $left="3%"
      $right="3%"
      id="Projects"
      $responsiveLeft="1rem"
      $responsiveRight="1rem"
      $responsiveTop="20%"
    >
      <Heading size="h2" as="h2">
        My <BlueText>Projects</BlueText>
      </Heading>

      {projectDetails.map((project) => (
        <PaddingContainer key={project.id} $top="5rem" $bottom="5rem">
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default ProjectSection;
