import "../App.css";
import Background from "./Background";
import { useState } from "react";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import ThemeSwitcher from "../features/theme/ThemeSwitcher";

const AppWrapper = styled.main`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Author = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 10;
  color: #fff;
  font-family: "Montserrat Variable", sans-serif;
  font-size: 14px;
`;

function App() {
  const [ref, bounds] = useMeasure();
  const [, setMouseX] = useState(0);
  const [, setMouseY] = useState(0);
  return (
    <>
      <AppWrapper
        ref={ref}
        onMouseMove={(e) => {
          setMouseX(e.clientX - bounds.x - bounds.width / 2);
          setMouseY(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <ThemeSwitcher />
        <Author>dreamed by DreamsWave © 2024</Author>
        <Background />
      </AppWrapper>
    </>
  );
}

export default App;
