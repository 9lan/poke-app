import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: inherit;
}
html {
  font-size: 16px;
}
body {
  font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
}
h1,h2,h3,h4,h5,h6 {
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
    line-height: 24px;
    letter-spacing: -0.006em;
}
a, a:visited, a:active, a:hover {
  text-decoration: none;
  color: inherit;
}
`;
