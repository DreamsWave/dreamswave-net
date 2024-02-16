import "../App.css";
import Background from "./Background";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import styled, { ThemeProvider } from "styled-components";
import ThemeSwitcher from "../features/theme/ThemeSwitcher";
import Socials from "./Socials";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/theme/themeSlice";
import { createTheme } from "../themes";
import { selectPixelSize } from "../features/pixelSize/pixelSizeSlice";
import PixelSizeSwitcher from "../features/pixelSize/PixelSizeSwitcher";

const AppWrapper = styled.div(() => ({
  minHeight: `100vh`,
  width: `100%`,
  position: `relative`,
  display: `flex`,
  flexDirection: `column`,
}));

const Content = styled.main`
  z-index: 20;
`;

const Author = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 10;
  color: #fff;
  font-size: 14px;
`;

function App() {
  const [ref, bounds] = useMeasure();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const { themeType } = useSelector(selectTheme);
  const { pixelSize } = useSelector(selectPixelSize);
  const theme = createTheme(themeType, pixelSize);

  const updateMouse = (e: React.MouseEvent) => {
    if (!window.matchMedia("only screen and (max-width: 660px)").matches) {
      setMouseX(e.clientX - bounds.x - bounds.width / 2);
      setMouseY(e.clientY - bounds.y - bounds.height / 2);
    }
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${pixelSize * 4}px`;
  }, [pixelSize]);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper ref={ref} onMouseMove={updateMouse}>
        <Content>
          <Socials />
        </Content>
        <PixelSizeSwitcher />
        <ThemeSwitcher />
        <Author>dreamed by DreamsWave © 2024</Author>
        <Background mouseX={mouseX} mouseY={mouseY} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
