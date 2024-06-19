import { createContext } from "react";

export const ThemeContext = createContext(null);

export enum ThemeEnum {
  LIGHT = "Light",
  DARK = "Dark",
  SYSTEM = "Use device theme",
}
