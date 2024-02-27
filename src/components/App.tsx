import "../App.css";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { HelmetProvider } from "react-helmet-async";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import ReactGA from "react-ga";
import Background from "./Background";
import Socials from "./Socials";
import { selectTheme } from "../features/theme/themeSlice";
import { createTheme } from "../themes";
import { selectPixelSize } from "../features/pixelSize/pixelSizeSlice";
import AppBar from "./AppBar";
import Footer from "./Footer";
import Head from "./Head";

ReactGA.initialize(import.meta.env.GA_ID);

const AppWrapper = styled.div(() => ({
  minHeight: `100vh`,
  width: `100%`,
  position: `relative`,
  display: `flex`,
  flexDirection: `column`,
}));

const Content = styled.main(({ theme }) => ({
  zIndex: theme.zIndex.mainContent,
  marginBottom: theme.spacing(theme.componentsGapFactor * 5),
}));

function App() {
  const [ref, bounds] = useMeasure();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const { themeType } = useSelector(selectTheme);
  const { pixelSize } = useSelector(selectPixelSize);
  const theme = createTheme(themeType, pixelSize);

  const updateMouse = (e: React.MouseEvent) => {
    if (!window.matchMedia("only screen and (max-width: 660px)").matches) {
      const newMouseX = Math.round(e.clientX - bounds.x - bounds.width / 2);
      const newMouseY = Math.round(e.clientY - bounds.y - bounds.height / 2);

      if (newMouseX !== mouseX || newMouseY !== mouseY) {
        setMouseX(newMouseX);
        setMouseY(newMouseY);
      }
    }
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${pixelSize * 4}px`;
  }, [pixelSize]);

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Head />
        <AppWrapper ref={ref} onMouseMove={updateMouse}>
          <AppBar />
          <Content>
            <Socials />
          </Content>
          <Footer />
          <Background mouseX={mouseX} mouseY={mouseY} />
        </AppWrapper>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
