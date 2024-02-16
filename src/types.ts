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

export type ThemeType = "dark" | "light";

export type Theme = {
  breakpoints: {
    mobile: number;
  };
  palette: {
    mode: ThemeType;
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
      color: string;
      gradient: {
        from: string;
        to: string;
      };
    };
    gradient: {
      from: string;
      to: string;
      opacity?: number;
    };
    icon: string;
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
    pixelCardBorder: number;
    pixelCardContent: number;
    appBar: number;
  };
};

export type Themes = {
  [key in ThemeType]: Theme;
};
