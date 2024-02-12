import styled from "styled-components";
import SocialGrid from "./SocialGrid";
import SocialList from "./SocialList";
import { PIXEL_SIZE } from "../constants";

const SocialsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  align-content: flex-start;
  justify-content: center;
  gap: ${PIXEL_SIZE * 8}px;
  padding: ${PIXEL_SIZE * 4}px;
`;

function Socials() {
  return (
    <SocialsWrapper>
      <SocialList />
      <SocialGrid />
    </SocialsWrapper>
  );
}

export default Socials;
