import { ParallaxProvider } from "react-scroll-parallax";
import "../App.css";
import Parallax from "./Parallax";
import { useState } from "react";
import useMeasure from "react-use-measure";
import styled from "styled-components";

const AppWrapper = styled.main`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #dfeded;
`;

function App() {
  const [ref, bounds] = useMeasure();
  const [, setMouseX] = useState(0);
  const [, setMouseY] = useState(0);
  return (
    <>
      <ParallaxProvider>
        <AppWrapper
          ref={ref}
          onMouseMove={(e) => {
            setMouseX(e.clientX - bounds.x - bounds.width / 2);
            setMouseY(e.clientY - bounds.y - bounds.height / 2);
          }}
        >
          <Parallax />
        </AppWrapper>
      </ParallaxProvider>
    </>
  );
}

export default App;
