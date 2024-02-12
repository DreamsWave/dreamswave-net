import styled from "styled-components";
import PixelCard, { PixelCardContent } from "./PixelCard";
import AvatarImage from "../assets/images/avatar.png";
import { PIXEL_SIZE } from "../constants";

const AboutRoot = styled.div`
  min-width: 340px;
  max-width: ${PIXEL_SIZE * 76}px;

  ${PixelCardContent} {
    padding: ${PIXEL_SIZE * 5}px;
    align-items: center;
  }
`;

const Avatar = styled.div`
  height: ${PIXEL_SIZE * 30}px;
  width: ${PIXEL_SIZE * 30}px;
  position: relative;
  margin-bottom: ${PIXEL_SIZE * 5}px;
`;
const AvatarImg = styled.img`
  height: calc(100% - 6px);
  width: calc(100% - 6px);
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 50%;
  background: rgba(199, 224, 229, 1);
`;
const AvatarBorder = styled.svg`
  zindex: 66;
  position: absolute;
  top: 0;
  left: 0;
`;

const AboutName = styled.h1`
  color: #445a73;
  font-size: 1.6em;
  font-weight: 400;
  margin: 0 0 ${PIXEL_SIZE * 2}px;
`;

const AboutDescription = styled.h2`
  color: #94b5bc;
  font-size: 1em;
  margin: 0;
`;

function About() {
  return (
    <AboutRoot>
      <PixelCard>
        <Avatar>
          <AvatarImg src={AvatarImage} />
          <AvatarBorder
            xmlns="http://www.w3.org/2000/svg"
            width={PIXEL_SIZE * 30}
            height={PIXEL_SIZE * 30}
            baseProfile="tiny"
            version="1.2"
            viewBox="0 0 30 30"
          >
            <g fill="rgba(199, 224, 229, 1)">
              <path d="M12 0h6v1h-6zM9 1h3v1H9zM18 1h3v1h-3zM7 2h2v1H7zM21 2h2v1h-2zM6 3h1v1H6zM23 3h1v1h-1zM5 4h1v1H5zM24 4h1v1h-1zM4 5h1v1H4zM25 5h1v1h-1zM3 6h1v1H3zM26 6h1v1h-1zM2 7h1v2H2zM27 7h1v2h-1zM1 9h1v3H1zM28 9h1v3h-1zM0 12h1v6H0zM29 12h1v6h-1zM1 18h1v3H1zM28 18h1v3h-1zM2 21h1v2H2zM27 21h1v2h-1zM3 23h1v1H3zM26 23h1v1h-1zM4 24h1v1H4zM25 24h1v1h-1zM5 25h1v1H5zM24 25h1v1h-1zM6 26h1v1H6zM23 26h1v1h-1zM7 27h2v1H7zM21 27h2v1h-2zM9 28h3v1H9zM18 28h3v1h-3zM12 29h6v1h-6z" />
            </g>
          </AvatarBorder>
        </Avatar>
        <AboutName>Alexey Uskov</AboutName>
        <AboutDescription>Web developer | Pixel art hobbyist</AboutDescription>
      </PixelCard>
    </AboutRoot>
  );
}

export default About;
