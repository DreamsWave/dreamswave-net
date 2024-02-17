import styled, { useTheme } from "styled-components";
import PixelCard, { PixelCardBorder, PixelCardContent } from "./PixelCard";
import SVGIcon from "./SVGIcon";
import { IconNames } from "../icons-svg";

const SocialLinkWrapper = styled.a(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.palette.text.dark,
  display: "inline-flex",
  width: "100%",
  justifyContent: "start",
  transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  "&:hover": {
    color: theme.palette.text.dark,
    [`${PixelCardBorder}`]: {
      background: `linear-gradient(180deg, ${theme.palette.border.gradient.from} 0%, ${theme.palette.border.gradient.from} 100%)`,
    },
  },
  "&:focus": {
    outline: "none",
    [`${PixelCardBorder}`]: {
      background: theme.action.focus,
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

const StyledSVGIcon = styled(SVGIcon)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  display: "inline-flex",
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

const Text = styled.p({
  margin: 0,
});

const SecondaryText = styled.p(({ theme }) => ({
  ...theme.typography.body1,
  margin: 0,
  color: theme.palette.text.main,
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
  const theme = useTheme();
  const handleSecondaryTextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (secondaryText) navigator.clipboard.writeText(secondaryText);
  };

  return (
    <SocialLinkWrapper href={href} aria-label={ariaLabel} target="_blank">
      <StyledPixelCard>
        <StyledSVGIcon iconName={icon} />
        <TextContainer>
          <Text>{text}</Text>
          {secondaryText && (
            <SecondaryText onClick={(e) => handleSecondaryTextClick(e)}>
              {secondaryText}
              <StyledCopySmallSVGIcon
                iconName="copy-small"
                size={3}
                fill={theme.palette.primary.main}
              />
            </SecondaryText>
          )}
        </TextContainer>
      </StyledPixelCard>
    </SocialLinkWrapper>
  );
}

export default SocialLink;
