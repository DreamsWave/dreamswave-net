import { Palette, Theme } from "../types";
import { hexToRgba } from "../utils";

const primaryPalette: Palette = {
  lightest: "#466a8b",
  light: "#446283",
  main: "#415b7c",
  dark: "#3b5170",
  darkest: "#2e3e58",
  text: {
    lightest: "#ffffff",
    light: "#ffffff",
    main: "#ffffff",
    dark: "#ffffff",
    darkest: "#ffffff",
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
    icon: {
      light: primaryPalette.text.light,
      main: primaryPalette.text.light,
      dark: primaryPalette.text.light,
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
  pixelSize: 4,
  spacing: (factor: number) => `${factor * 4}px`,
  componentsGapFactor: 4,
};

export default theme;
