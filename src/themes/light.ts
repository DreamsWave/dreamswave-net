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
    dark: "#6392a9",
    darkest: "#4f758f",
  },
};

const theme: Theme = {
  breakpoints: {
    min: 340,
    mobile: 660,
    max: 800,
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
      focus: primaryPalette.dark,
      hover: primaryPalette.light,
    },
    gradient: {
      from: hexToRgba(primaryPalette.light, 0.5),
      to: hexToRgba(primaryPalette.lightest, 0.5),
    },
    icon: {
      light: primaryPalette.light,
      main: primaryPalette.main,
      dark: primaryPalette.dark,
      active: primaryPalette.dark,
    },
    text: {
      ...primaryPalette.text,
    },
  },
  background: {
    default: "",
  },
  action: {
    active: "",
    hover: primaryPalette.text.light,
    selected: "",
    disabled: "",
    focus: primaryPalette.dark,
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
      color: primaryPalette.text.darkest,
    },
    h2: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: 1.2,
      letterSpacing: "0",
      color: primaryPalette.text.dark,
    },
    h3: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: 1.2,
      letterSpacing: "0",
      color: primaryPalette.text.main,
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
      color: primaryPalette.text.light,
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
    pixelCardContent: 25,
    appBar: 50,
    footer: 20,
  },
  pixelSize: 4,
  spacing: (factor: number) => `${factor * 4}px`,
  componentsGapFactor: 4,
  iconSizeFactor: {
    smallest: 3,
    small: 5,
    main: 10,
    big: 15,
    biggest: 20,
  },
};

export default theme;
