import styled from "styled-components";
import SocialList from "./SocialList";
import { PIXEL_SIZE } from "../constants";
import About from "./About";

const SocialsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  align-content: flex-start;
  justify-content: center;
  gap: ${PIXEL_SIZE * 4}px;
  padding: ${PIXEL_SIZE * 16}px ${PIXEL_SIZE * 4}px;
  min-width: 420px;

  @media (max-width: 660px) {
    padding: ${PIXEL_SIZE * 4}px ${PIXEL_SIZE * 4}px ${PIXEL_SIZE * 10}px;
  }
`;

function Socials() {
  return (
    <SocialsWrapper>
      <About />
      <SocialList />
    </SocialsWrapper>
  );
}

export default Socials;
