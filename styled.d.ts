import Styled, { BaseThemeProviderComponent } from "styled-components";

interface TypeTheme extends DefaultTheme {}
declare module "styled-components" {
  export interface DefaultTheme extends Styled {
    colors: {
      background: {
        main:string,
        light:string
      };
      primary: {
        800:  string,
        600:  string,
        500:  string,
        400:  string,
      };
      gray: {
        600: string;
        500: string;
        400: string;
        300: string;
        100: string;
      };
    };
  }
}
