import { Theme, Themes } from "./types";

const lightTheme: Theme = {
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
      color: "#c7e0e5",
      gradient: {
        from: "#c7e0e5",
        to: "#d7e8ea",
      },
    },
    gradient: {
      from: "rgba(199, 224, 229, 0.5)",
      to: "rgba(215, 232, 234, 0.5)",
    },
    icon: "#94b5bc",
  },
  text: {
    primary: "#445a73",
    secondary: "#6e96a6",
    disabled: "#b8d3d0",
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
    pixelCardBorder: 25,
    pixelCardContent: 24,
    appBar: 50,
  },
};

const darkTheme: Theme = {
  breakpoints: {
    mobile: 660,
  },
  palette: {
    mode: "dark",
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
      main: "",
      layers: {
        cloudBack: "",
        cloudLeft: "",
        cloudMiddle: "",
        cloudRight: "",
        mainBg: "",
        stars: "",
      },
    },
    border: {
      color: "",
      gradient: {
        from: "",
        to: "",
      },
    },
    gradient: {
      from: "",
      to: "",
    },
    icon: "",
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
    hover: "",
    selected: "",
    disabled: "",
    focus: "",
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
    pixelCardBorder: 25,
    pixelCardContent: 24,
    appBar: 50,
  },
};

const themes: Themes = { light: lightTheme, dark: darkTheme };

export default themes;
