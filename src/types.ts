export type Theme = "light" | "dark";

export type IconType =
  | "artstation"
  | "discord"
  | "email"
  | "github"
  | "instagram"
  | "spotify"
  | "telegram"
  | "twitch"
  | "twitter"
  | "vk";

export type THEME = {
  breakpoints: {
    mobile: number;
  };
  palette: {
    mode: string;
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    background: {
      main: string;
      layers: {
        cloudBack: string;
        cloudLeft: string;
        cloudMiddle: string;
        cloudRight: string;
        mainBg: string;
        stars: string;
      };
    };
    border: {
      dark: string;
      light: string;
    };
    gradient: {
      start: string;
      end: string;
      opacity?: number;
    };
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    default: string;
  };
  action: {
    active: string;
    hover: string;
    selected: string;
    disabled: string;
    focus: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    htmlFontSize: number;
    fontFamily: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    h2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    subtitle1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    subtitle2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    body1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    body2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    button: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
      textTrasform: string;
    };
  };
  transitions: {
    duration: {
      short: number;
      standard: number;
      long: number;
    };
  };
  zIndex: {
    background: number;
    mainContent: number;
    appBar: number;
  };
};
