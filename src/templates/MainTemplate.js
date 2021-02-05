import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/MainTheme";

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default MainTemplate;
