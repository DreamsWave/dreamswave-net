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

export type LanguageType = "en" | "ru";

export type Palette = {
  lightest: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  text: {
    lightest: string;
    light: string;
    main: string;
    dark: string;
    darkest: string;
  };
};

export type Theme = {
  breakpoints: {
    min: number;
    mobile: number;
    max: number;
  };
  palette: {
    mode: ThemeType;
    primary: {
      lightest: string;
      light: string;
      main: string;
      dark: string;
      darkest: string;
      contrastText: string;
    };
    secondary?: {
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
      focus: string;
      hover: string;
    };
    gradient: {
      from: string;
      to: string;
      opacity?: number;
    };
    icon: {
      light: string;
      main: string;
      dark: string;
      active: string;
    };
    text: {
      lightest: string;
      light: string;
      main: string;
      dark: string;
      darkest: string;
    };
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
      color: string;
    };
    h2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
      color: string;
    };
    h3: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
      color: string;
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
      color: string;
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
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };
  };
  zIndex: {
    background: number;
    mainContent: number;
    pixelCardBorder: number;
    pixelCardContent: number;
    appBar: number;
    footer: number;
  };
  spacing: (factor: number) => string;
  pixelSize: number;
  componentsGapFactor: number;
  iconSizeFactor: {
    smallest: number;
    small: number;
    main: number;
    big: number;
    biggest: number;
  };
};

export type Themes = {
  [key in ThemeType]: Theme;
};
