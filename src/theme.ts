import { THEME } from "./types";

const theme: THEME = {
  breakpoints: {
    mobile: 660,
  },
  palette: {
    mode: "light",
    primary: {
      main: "",
      light: "",
      dark: "",
      contrastText: "",
    },
    secondary: {
      main: "",
      light: "",
      dark: "",
      contrastText: "",
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
      dark: "#c7e0e5",
      light: "#d7e8ea",
    },
    gradient: {
      start: "rgba(199, 224, 229, 0.5)",
      end: "rgba(215, 232, 234, 0.5)",
      // opacity: 0.5,
    },
  },
  text: {
    primary: "",
    secondary: "",
    disabled: "",
  },
  background: {
    default: "",
  },
  action: {
    active: "",
    hover: "#94b5bc",
    selected: "",
    disabled: "",
    focus: "#94b5bc",
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
      lineHeight: 1.1,
      letterSpacing: "0",
    },
    h2: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: 1,
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
      lineHeight: 1,
      letterSpacing: "0",
    },
    body2: {
      fontFamily: `"Montserrat Variable", sans-serif`,
      fontWeight: 400,
      fontSize: "0.8rem",
      lineHeight: 1,
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
  },
  zIndex: {
    background: 10,
    mainContent: 20,
    appBar: 50,
  },
};

export default theme;
