import { Palette, Theme } from "../types";
import { hexToRgba } from "../utils";

const primaryPalette: Palette = {
  lightest: "#466a8b",
  light: "#446283",
  main: "#415b7c",
  dark: "#3b5170",
  darkest: "#2e3e58",
  text: {
    lightest: "#d7e8ea",
    light: "#b6d6dd",
    main: "#6e96a6",
    dark: "#466a8b",
    darkest: "#415b7c",
  },
};

const theme: Theme = {
  breakpoints: {
    min: 340,
    mobile: 660,
    max: 800,
  },
  palette: {
    mode: "dark",
    primary: {
      ...primaryPalette,
      contrastText: "#ffffff",
    },
    background: {
      main: "#2e3e58",
      layers: {
        cloudBack: "#3b5170",
        cloudLeft: "#466a8b",
        cloudMiddle: "#415b7c",
        cloudRight: "#446283",
        mainBg: "#2e3e58",
        stars: "#ffffff",
      },
    },
    border: {
      color: primaryPalette.main,
      gradient: {
        from: primaryPalette.main,
        to: primaryPalette.dark,
      },
      focus: primaryPalette.lightest,
      hover: primaryPalette.main,
    },
    gradient: {
      from: hexToRgba(primaryPalette.main, 0.5),
      to: hexToRgba(primaryPalette.dark, 0.5),
    },
    icon: {
      light: primaryPalette.text.light,
      main: primaryPalette.text.main,
      dark: primaryPalette.text.dark,
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
    focus: primaryPalette.text.lightest,
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
