import styled, { useTheme } from "styled-components";
import PixelCard, { PixelCardContent } from "./PixelCard";
import { useEffect, useState } from "react";
import { Theme } from "../types";
import SVGIcon from "./SVGIcon";
import { useAppSelector } from "../hooks";
import { selectLanguage } from "../features/language/languageSlice";
import { Border } from "./PixelBorders";
import Avatar from "./Avatar";

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
  position: `relative`,

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
          <Avatar size={isMobile ? "big" : "main"} />
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
