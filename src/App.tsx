import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { Body, Container } from "stcomponents/containers";
import ProfileSection from "components/ProfileSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Container>
          <ProfileSection />
        </Container>
      </Body>
    </ThemeProvider>
  );
}

export default App;
