import styled, { useTheme } from "styled-components";
import Icon from "./Icon";
import { IconType, Theme } from "../types";
import { PIXEL_SIZE } from "../constants";
import PixelCard, { PixelCardBorder, PixelCardContent } from "./PixelCard";
import { CopySmallSVG } from "./SVGIcons";

const CopyIcon = styled(CopySmallSVG)(({ theme }) => ({
  opacity: 0,
  transition: `opacity ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  marginLeft: `${PIXEL_SIZE}px`,
  height: theme.spacing(3),
  width: theme.spacing(3),
}));

const SocialLinkWrapper = styled.a(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.palette.text.primary,
  display: "inline-flex",
  width: "100%",
  justifyContent: "start",
  transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  "&:hover": {
    color: theme.palette.text.primary,
    [`${PixelCardBorder}`]: {
      background: `linear-gradient(180deg, ${theme.palette.border.gradient.from} 0%, ${theme.palette.border.gradient.from} 100%)`,
    },
  },
  "&:focus": {
    outline: "none",
    [`${PixelCardBorder}`]: {
      background: theme.palette.primary.dark,
    },
  },
}));

const StyledPixelCard = styled(PixelCard)(({ theme }) => ({
  width: "100%",
  [`${PixelCardContent}`]: {
    flexDirection: "row",
    alignItems: "center",
    height: theme.spacing(18),
  },
}));

const StyledIcon = styled.i(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  display: "inline-flex",
}));

const TextContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const Text = styled.p({
  margin: 0,
});

const SecondaryText = styled.p(({ theme }) => ({
  ...theme.typography.body1,
  margin: 0,
  color: theme.palette.text.secondary,
  display: "inline-flex",
  alignItems: "center",
  transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  "&:hover": {
    color: theme.action.hover,
    [`${CopyIcon}`]: {
      opacity: 1,
    },
  },
}));

type SocialLinkProps = {
  href: string;
  ariaLabel: string;
  icon: IconType;
  text: string;
  secondaryText?: string;
};

function SocialLink({
  href,
  ariaLabel,
  icon,
  text,
  secondaryText,
}: SocialLinkProps) {
  const theme: Theme = useTheme();
  const handleSecondaryTextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (secondaryText) navigator.clipboard.writeText(secondaryText);
  };

  return (
    <SocialLinkWrapper href={href} aria-label={ariaLabel} target="_blank">
      <StyledPixelCard>
        <StyledIcon>
          <Icon type={icon} color={theme.palette.icon} />
        </StyledIcon>
        <TextContainer>
          <Text>{text}</Text>
          {secondaryText && (
            <SecondaryText onClick={(e) => handleSecondaryTextClick(e)}>
              {secondaryText}
              <CopyIcon color={theme.palette.icon} />
            </SecondaryText>
          )}
        </TextContainer>
      </StyledPixelCard>
    </SocialLinkWrapper>
  );
}

export default SocialLink;
