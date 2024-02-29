import { projectDetails } from "data/projects";
import React from "react";
import { PaddingContainer } from "stcomponents/common/containers";
import { Heading, BlueText, ParaText } from "stcomponents/common/typography";
import Project from "./Project";

const ProjectSection = () => {
  return (
    <PaddingContainer $top="5%" $bottom="5%" $left="3%" id="Projects">
      <Heading size="h2" as="h2">
        My <BlueText>Projects</BlueText>
      </Heading>

      {projectDetails.map((project) => (
        <PaddingContainer $top="5rem" $bottom="5rem">
          <Project key={project.id} data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default ProjectSection;
