import styled, { useTheme } from "styled-components";
import PixelCard, { PixelCardContent } from "./PixelCard";
import AvatarImage from "../assets/images/avatar.png";
import { useEffect, useState } from "react";
import { Theme } from "../types";
import SVGIcon from "./SVGIcon";
import { useAppSelector } from "../hooks";
import { selectLanguage } from "../features/language/languageSlice";
import { Border } from "./PixelBorders";
import { animated, useSpring } from "@react-spring/web";

const AboutRoot = styled.div(({ theme }) => ({
  minWidth: `${theme.breakpoints.min}px`,
  width: `100%`,
  maxWidth: `${theme.breakpoints.max}px`,

  [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
    paddingTop: theme.spacing(
      theme.componentsGapFactor + theme.iconSizeFactor.main
    ),

    [`${Border}`]: {
      zIndex: theme.zIndex.pixelCardBorder - 1,
    },
  },

  [`${PixelCardContent}`]: {
    padding: theme.spacing(5),
    alignItems: `center`,
    flexDirection: `row`,

    [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
      flexDirection: `column`,
    },
  },
}));

const Avatar = styled.div<{ $size: string }>(({ theme, $size }) => ({
  height: $size,
  width: $size,
  position: `relative`,
  marginRight: theme.spacing(5),
}));

const AvatarImg = styled(animated.img)(() => ({
  height: `calc(100% - 6px)`,
  width: `calc(100% - 6px)`,
  position: `absolute`,
  top: `3px`,
  left: `3px`,
  borderRadius: `50%`,
  // background: $backgroundColor,
  // transition: `background 300ms ease-in-out`,
  // transition: `background ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
}));
const AvatarBorder = styled.svg`
  z-index: 66;
  position: absolute;
  top: 0;
  left: 0;
`;

const AboutHero = styled.div(({ theme }) => ({
  display: `flex`,
  alignItems: `center`,
  marginRight: theme.spacing(5),
  textAlign: `start`,

  [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
    flexDirection: `column`,
    textAlign: `center`,
    justifyContent: `center`,
    width: `100%`,
    marginRight: 0,
    marginTop: `-${theme.spacing(20)}`,

    [`${Avatar}`]: {
      marginRight: 0,
      marginBottom: theme.spacing(3),
    },
  },
}));

const AboutNames = styled.div`
  line-height: 1;
`;

const AboutName = styled.h1(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.text.darkest,
  margin: 0,
  marginBottom: theme.spacing(1),
  textWrap: `nowrap`,
  transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
}));

const AboutNickname = styled.h2(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.palette.text.main,
  margin: 0,
  transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
}));

const AboutDescriptionList = styled.ul(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.light,
  margin: 0,
  listStyle: `none`,
  padding: 0,
  marginLeft: `auto`,
  textAlign: `end`,
  display: `flex`,
  flexDirection: `column`,
  transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,

  [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
    alignItems: `center`,
    gap: `0 ${theme.spacing(5)}`,
    width: `100%`,
    justifyItems: `center`,
    marginTop: theme.spacing(5),
    marginLeft: 0,
  },
}));

const AboutDescriptionListItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: end;
  gap: ${({ theme }) => theme.spacing(1)};
`;

function About() {
  const theme: Theme = useTheme();
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= theme.breakpoints.mobile
  );
  const { languageType } = useAppSelector(selectLanguage);

  const avatarBackgroundTransition = useSpring({
    background: theme.palette.border.color,
  });
  const avatarFillTransition = useSpring({
    fill: theme.palette.border.color,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= theme.breakpoints.mobile);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints.mobile]);

  return (
    <AboutRoot>
      <PixelCard>
        <AboutHero>
          {isMobile ? (
            <Avatar $size={theme.spacing(30)}>
              <AvatarImg src={AvatarImage} style={avatarBackgroundTransition} />

              <AvatarBorder
                xmlns="http://www.w3.org/2000/svg"
                width={theme.spacing(30)}
                height={theme.spacing(30)}
                baseProfile="tiny"
                version="1.2"
                viewBox="0 0 30 30"
              >
                <animated.g style={avatarFillTransition}>
                  <path d="M12 0h6v1h-6zM9 1h3v1H9zM18 1h3v1h-3zM7 2h2v1H7zM21 2h2v1h-2zM6 3h1v1H6zM23 3h1v1h-1zM5 4h1v1H5zM24 4h1v1h-1zM4 5h1v1H4zM25 5h1v1h-1zM3 6h1v1H3zM26 6h1v1h-1zM2 7h1v2H2zM27 7h1v2h-1zM1 9h1v3H1zM28 9h1v3h-1zM0 12h1v6H0zM29 12h1v6h-1zM1 18h1v3H1zM28 18h1v3h-1zM2 21h1v2H2zM27 21h1v2h-1zM3 23h1v1H3zM26 23h1v1h-1zM4 24h1v1H4zM25 24h1v1h-1zM5 25h1v1H5zM24 25h1v1h-1zM6 26h1v1H6zM23 26h1v1h-1zM7 27h2v1H7zM21 27h2v1h-2zM9 28h3v1H9zM18 28h3v1h-3zM12 29h6v1h-6z" />{" "}
                </animated.g>
              </AvatarBorder>
            </Avatar>
          ) : (
            <Avatar $size={theme.spacing(20)}>
              <AvatarImg src={AvatarImage} style={avatarBackgroundTransition} />
              <AvatarBorder
                xmlns="http://www.w3.org/2000/svg"
                width={theme.spacing(20)}
                height={theme.spacing(20)}
                baseProfile="tiny"
                version="1.2"
                viewBox="0 0 20 20"
              >
                <animated.g style={avatarFillTransition}>
                  <path d="M7 0h6v1H7zM5 1h2v1H5zM13 1h2v1h-2zM4 2h1v1H4zM15 2h1v1h-1zM3 3h1v1H3zM16 3h1v1h-1zM2 4h1v1H2zM17 4h1v1h-1zM1 5h1v2H1zM18 5h1v2h-1zM0 7h1v6H0zM19 7h1v6h-1zM1 13h1v2H1zM18 13h1v2h-1zM2 15h1v1H2zM17 15h1v1h-1zM3 16h1v1H3zM16 16h1v1h-1zM4 17h1v1H4zM15 17h1v1h-1zM5 18h2v1H5zM13 18h2v1h-2zM7 19h6v1H7z" />
                </animated.g>
              </AvatarBorder>
            </Avatar>
          )}
          <AboutNames>
            <AboutName>
              {languageType === "en" ? `Alexey Uskov` : `Усков Алексей`}
            </AboutName>
            <AboutNickname>DreamsWave</AboutNickname>
          </AboutNames>
        </AboutHero>
        <AboutDescriptionList>
          <AboutDescriptionListItem>
            {languageType === "en" ? `Web developer` : `Веб разработчик`}
          </AboutDescriptionListItem>
          <AboutDescriptionListItem>
            {languageType === "en"
              ? `Pixel art hobbyist`
              : `Любитель пиксельной графики`}
          </AboutDescriptionListItem>
          <AboutDescriptionListItem>
            {languageType === "en" ? `Music enjoyer` : `Меломан`}
          </AboutDescriptionListItem>
          <AboutDescriptionListItem>
            <SVGIcon
              iconName="alian"
              fill={theme.palette.icon.main}
              size="small"
            />
            {languageType === "en" ? `Gamer` : `Геймер`}
          </AboutDescriptionListItem>
        </AboutDescriptionList>
      </PixelCard>
    </AboutRoot>
  );
}

export default About;
