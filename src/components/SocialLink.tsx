import styled, { useTheme } from "styled-components";
import PixelCard, { PixelCardContent } from "./PixelCard";
import SVGIcon from "./SVGIcon";
import { IconNames } from "../icons-svg";
import { useState } from "react";

const SocialLinkRoot = styled.a(({ theme }) => ({
  ...theme.typography.h2,
  display: "inline-flex",
  width: "100%",
  justifyContent: "start",
  transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  "&:hover": {
    color: theme.palette.text.dark,
  },
  "&:focus": {
    outline: "none",
  },
}));

const StyledSVGIcon = styled(SVGIcon)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  display: "inline-flex",
}));

const StyledPixelCard = styled(PixelCard)(({ theme }) => ({
  width: "100%",
  [`${PixelCardContent}`]: {
    flexDirection: "row",
    alignItems: "center",
    height: theme.spacing(18),
  },
}));

const StyledCopySmallSVGIcon = styled(SVGIcon)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  opacity: 0,
  transition: `opacity ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
}));

const TextContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const SocialLinkTitle = styled.h3(({ theme }) => ({
  ...theme.typography.h3,
  margin: 0,
}));

const SocialLinkDescription = styled.p(({ theme }) => ({
  ...theme.typography.body1,
  margin: 0,
  display: "inline-flex",
  alignItems: "center",
  transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  "&:hover": {
    color: theme.action.hover,
    [`${StyledCopySmallSVGIcon}`]: {
      opacity: 1,
    },
  },
}));

type SocialLinkProps = {
  href: string;
  ariaLabel: string;
  icon: IconNames;
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
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const handleSecondaryTextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (secondaryText) navigator.clipboard.writeText(secondaryText);
  };

  return (
    <SocialLinkRoot
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledPixelCard bordersFocus={isFocused} bordersHover={isHovered}>
        <StyledSVGIcon iconName={icon} />
        <TextContainer>
          <SocialLinkTitle>{text}</SocialLinkTitle>
          {secondaryText && (
            <SocialLinkDescription onClick={(e) => handleSecondaryTextClick(e)}>
              {secondaryText}
              <StyledCopySmallSVGIcon
                iconName="copy-small"
                size="smallest"
                fill={theme.palette.primary.main}
              />
            </SocialLinkDescription>
          )}
        </TextContainer>
      </StyledPixelCard>
    </SocialLinkRoot>
  );
}

export default SocialLink;
