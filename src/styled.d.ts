import { THEME } from "./types";

declare module "styled-components" {
  export interface DefaultTheme extends THEME {}
}
