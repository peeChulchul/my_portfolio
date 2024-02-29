import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { Body, Container } from "stcomponents/common/containers";
import ProfileSection from "components/ProfileSection";
import SkillSection from "components/SkillSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Container>
          <ProfileSection />
          <SkillSection />
        </Container>
      </Body>
    </ThemeProvider>
  );
}

export default App;
