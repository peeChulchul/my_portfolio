import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { Body, Container } from "stcomponents/common/containers";
import ProfileSection from "components/ProfileSection";
import SkillSection from "components/SkillSection";
import ProjectSection from "components/ProjectSection";
import ContactSection from "components/ContactSection";
import Navbar from "components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Navbar />
        <Container>
          <ProfileSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </Container>
      </Body>
    </ThemeProvider>
  );
}

export default App;
