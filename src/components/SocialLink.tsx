import styled, { useTheme } from "styled-components";
import Icon from "./Icon";
import { IconType, Theme } from "../types";
import { PIXEL_SIZE } from "../constants";
import PixelCard, { PixelCardBorder, PixelCardContent } from "./PixelCard";
import { CopySmallSVG } from "./SVGIcons";

const CopyIcon = styled(CopySmallSVG)`
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};
  margin-left: ${PIXEL_SIZE}px;
  height: ${PIXEL_SIZE * 3}px;
  width: ${PIXEL_SIZE * 3}px;
`;

const SocialLinkWrapper = styled.a`
  ${({ theme }) => theme.typography.h2}
  color: ${({ theme }) => theme.palette.text.primary};
  display: inline-flex;
  width: 100%;
  justify-content: start;
  transition: color ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};

    ${PixelCardBorder} {
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.palette.border.gradient.from} 0%,
        ${({ theme }) => theme.palette.border.gradient.from} 100%
      );
    }
  }

  &:focus {
    outline: none;

    ${PixelCardBorder} {
      background: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;

const StyledPixelCard = styled(PixelCard)`
  width: 100%;

  ${PixelCardContent} {
    flex-direction: row;
    align-items: center;
    height: ${PIXEL_SIZE * 18}px;
  }
`;

const StyledIcon = styled.i`
  margin-left: ${PIXEL_SIZE * 3}px;
  margin-right: ${PIXEL_SIZE * 3}px;
  display: inline-flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Text = styled.p`
  margin: 0;
`;

const SecondaryText = styled.p`
  ${({ theme }) => theme.typography.body1}
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: inline-flex;
  align-items: center;
  transition: color ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover {
    color: ${({ theme }) => theme.action.hover};
    ${CopyIcon} {
      opacity: 1;
    }
  }
`;

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

              <CopyIcon color="#b6d6dd" />
            </SecondaryText>
          )}
        </TextContainer>
      </StyledPixelCard>
    </SocialLinkWrapper>
  );
}

export default SocialLink;
