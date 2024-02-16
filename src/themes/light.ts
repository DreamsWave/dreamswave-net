import { Palette, Theme } from "../types";
import { hexToRgba } from "../utils";

const primaryPalette: Palette = {
  lightest: "#d7e8ea",
  light: "#c7e0e5",
  main: "#94b5bc",
  dark: "#6e96a6",
  darkest: "#445a73",
  text: {
    lightest: "#d7e8ea",
    light: "#94b5bc",
    main: "#6e96a6",
    dark: "#445a73",
    darkest: "#445a73",
  },
};

const theme: Theme = {
  breakpoints: {
    mobile: 660,
  },
  palette: {
    mode: "light",
    primary: {
      ...primaryPalette,
      contrastText: "#ffffff",
    },
    background: {
      main: "#dfeded",
      layers: {
        cloudBack: "#d9eaed",
        cloudLeft: "#c7e0e5",
        cloudMiddle: "#d2e6e9",
        cloudRight: "#cbe3e6",
        mainBg: "#dfeded",
        stars: "#ffffff",
      },
    },
    border: {
      color: primaryPalette.light,
      gradient: {
        from: primaryPalette.light,
        to: primaryPalette.lightest,
      },
    },
    gradient: {
      from: hexToRgba(primaryPalette.light, 0.5),
      to: hexToRgba(primaryPalette.lightest, 0.5),
    },
    icon: primaryPalette.main,
    text: {
      primary: primaryPalette.text.dark,
      secondary: primaryPalette.text.main,
      disabled: primaryPalette.text.light,
    },
  },
  background: {
    default: "",
  },
  action: {
    active: "",
    hover: primaryPalette.text.lightest,
    selected: "",
    disabled: "",
    focus: primaryPalette.main,
  },
  spacing: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 25,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: `"Montserrat Variable", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 400,
      fontSize: "1.8rem",
      lineHeight: 1.167,
      letterSpacing: "0",
    },
    h2: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: 1.2,
      letterSpacing: "0",
    },
    subtitle1: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 500,
      fontSize: "1.2rem",
      lineHeight: 1.5,
      letterSpacing: "0",
    },
    subtitle2: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 500,
      fontSize: "0.8rem",
      lineHeight: 1.5,
      letterSpacing: "0",
    },
    body1: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0",
    },
    body2: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 400,
      fontSize: "0.8rem",
      lineHeight: 1.43,
      letterSpacing: "0",
    },
    button: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.2,
      letterSpacing: "0",
      textTrasform: "uppercase",
    },
  },
  transitions: {
    duration: {
      short: 150,
      standard: 300,
      long: 450,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  zIndex: {
    background: 10,
    mainContent: 20,
    pixelCardBorder: 25,
    pixelCardContent: 24,
    appBar: 50,
  },
};

export default theme;
