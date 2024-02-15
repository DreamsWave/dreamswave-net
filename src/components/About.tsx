import styled, { useTheme } from "styled-components";
import PixelCard, { PixelCardContent } from "./PixelCard";
import AvatarImage from "../assets/images/avatar.png";
import { PIXEL_SIZE } from "../constants";
import { useEffect, useState } from "react";
import { AlianSVG } from "./SVGIcons";
import { Theme } from "../types";
import { useAppSelector } from "../hooks";
import { selectTheme } from "../features/theme/themeSlice";

const AboutRoot = styled.div`
  min-width: 340px;
  width: 100%;
  max-width: 800px;

  ${PixelCardContent} {
    padding: ${PIXEL_SIZE * 5}px;
    align-items: center;
    flex-direction: row;

    @media (max-width: 660px) {
      flex-direction: column;
      margin-top: ${PIXEL_SIZE * 16}px;
    }
  }
`;

const Avatar = styled.div<{ size: number }>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  position: relative;
  margin-right: ${PIXEL_SIZE * 5}px;
`;
const AvatarImg = styled.img<{ $backgroundColor: string }>`
  height: calc(100% - 6px);
  width: calc(100% - 6px);
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 50%;
  background: ${({ $backgroundColor }) => $backgroundColor};
`;
const AvatarBorder = styled.svg`
  zindex: 66;
  position: absolute;
  top: 0;
  left: 0;
`;

const AboutHero = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${PIXEL_SIZE * 5}px;
  text-align: start;

  @media (max-width: 660px) {
    flex-direction: column;
    text-align: center;
    margin-right: 0;
    margin-top: -${PIXEL_SIZE * 20}px;

    ${Avatar} {
      margin-right: 0;
      margin-bottom: ${PIXEL_SIZE * 3}px;
    }
  }
`;

const AboutNames = styled.div`
  line-height: 1;
`;

const AboutName = styled.h1`
  color: #445a73;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: ${PIXEL_SIZE * 1}px;
  text-wrap: nowrap;
`;
const AboutNickname = styled.h2`
  color: #6e96a6;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`;

const AboutDescriptionList = styled.ul`
  color: #94b5bc;
  font-size: 1em;
  margin: 0;
  list-style: none;
  padding: 0;
  margin-left: auto;
  text-align: end;

  @media (max-width: 660px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 20px;
    width: 100%;
    justify-items: center;
    margin-top: 20px;
    margin-left: 0;
  }
`;

const AboutDescriptionListItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: end;
  gap: 5px;
`;

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);
  const theme: Theme = useTheme();
  const { themeType } = useAppSelector(selectTheme);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 660);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AboutRoot>
      <PixelCard>
        <AboutHero>
          {isMobile ? (
            <Avatar size={PIXEL_SIZE * 30}>
              <AvatarImg
                src={AvatarImage}
                $backgroundColor={theme.palette.border[themeType].color}
              />

              <AvatarBorder
                xmlns="http://www.w3.org/2000/svg"
                width={PIXEL_SIZE * 30}
                height={PIXEL_SIZE * 30}
                baseProfile="tiny"
                version="1.2"
                viewBox="0 0 30 30"
              >
                <g fill={theme.palette.border[themeType].color}>
                  <path d="M12 0h6v1h-6zM9 1h3v1H9zM18 1h3v1h-3zM7 2h2v1H7zM21 2h2v1h-2zM6 3h1v1H6zM23 3h1v1h-1zM5 4h1v1H5zM24 4h1v1h-1zM4 5h1v1H4zM25 5h1v1h-1zM3 6h1v1H3zM26 6h1v1h-1zM2 7h1v2H2zM27 7h1v2h-1zM1 9h1v3H1zM28 9h1v3h-1zM0 12h1v6H0zM29 12h1v6h-1zM1 18h1v3H1zM28 18h1v3h-1zM2 21h1v2H2zM27 21h1v2h-1zM3 23h1v1H3zM26 23h1v1h-1zM4 24h1v1H4zM25 24h1v1h-1zM5 25h1v1H5zM24 25h1v1h-1zM6 26h1v1H6zM23 26h1v1h-1zM7 27h2v1H7zM21 27h2v1h-2zM9 28h3v1H9zM18 28h3v1h-3zM12 29h6v1h-6z" />{" "}
                </g>
              </AvatarBorder>
            </Avatar>
          ) : (
            <Avatar size={PIXEL_SIZE * 20}>
              <AvatarImg
                src={AvatarImage}
                $backgroundColor={theme.palette.border[themeType].color}
              />
              <AvatarBorder
                xmlns="http://www.w3.org/2000/svg"
                width={PIXEL_SIZE * 20}
                height={PIXEL_SIZE * 20}
                baseProfile="tiny"
                version="1.2"
                viewBox="0 0 20 20"
              >
                <g fill={theme.palette.border[themeType].color}>
                  <path d="M7 0h6v1H7zM5 1h2v1H5zM13 1h2v1h-2zM4 2h1v1H4zM15 2h1v1h-1zM3 3h1v1H3zM16 3h1v1h-1zM2 4h1v1H2zM17 4h1v1h-1zM1 5h1v2H1zM18 5h1v2h-1zM0 7h1v6H0zM19 7h1v6h-1zM1 13h1v2H1zM18 13h1v2h-1zM2 15h1v1H2zM17 15h1v1h-1zM3 16h1v1H3zM16 16h1v1h-1zM4 17h1v1H4zM15 17h1v1h-1zM5 18h2v1H5zM13 18h2v1h-2zM7 19h6v1H7z" />
                </g>
              </AvatarBorder>
            </Avatar>
          )}
          <AboutNames>
            <AboutName>Alexey Uskov</AboutName>
            <AboutNickname>DreamsWave</AboutNickname>
          </AboutNames>
        </AboutHero>
        <AboutDescriptionList>
          <AboutDescriptionListItem>Web developer</AboutDescriptionListItem>
          <AboutDescriptionListItem>
            Pixel art hobbyist
          </AboutDescriptionListItem>
          <AboutDescriptionListItem>Music enjoyer </AboutDescriptionListItem>
          <AboutDescriptionListItem>
            <AlianSVG size={20} color={theme.palette.icon[themeType]} />
            Gamer
          </AboutDescriptionListItem>
        </AboutDescriptionList>
      </PixelCard>
    </AboutRoot>
  );
}

export default About;
