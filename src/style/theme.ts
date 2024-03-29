export const theme = {
  colors: {
    primary: "#0f172a",
    primary_light: "#131c31",
    secondary: "#7eadfc",
    white: "#fff",
    black: "#000",
    para_text_color: "#dcdcdc",
    gray: "#cdcdcd"
  },
  fonts: {
    family: "Noto Sans KR",
    weight: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  breakpoints: {
    mobile: "720px"
  }
};

export type themeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
