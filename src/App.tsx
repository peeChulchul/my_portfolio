import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
