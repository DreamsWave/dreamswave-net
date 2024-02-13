import "../App.css";
import Background from "./Background";
import { useState } from "react";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import ThemeSwitcher from "../features/theme/ThemeSwitcher";
import Socials from "./Socials";

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

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

  const updateMouse = (e: React.MouseEvent) => {
    if (!window.matchMedia("only screen and (max-width: 660px)").matches) {
      setMouseX(e.clientX - bounds.x - bounds.width / 2);
      setMouseY(e.clientY - bounds.y - bounds.height / 2);
    }
  };

  return (
    <>
      <AppWrapper ref={ref} onMouseMove={updateMouse}>
        <Content>
          <Socials />
        </Content>
        <ThemeSwitcher />
        <Author>dreamed by DreamsWave © 2024</Author>
        <Background mouseX={mouseX} mouseY={mouseY} />
      </AppWrapper>
    </>
  );
}

export default App;
