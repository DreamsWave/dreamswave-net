import styled, { useTheme } from "styled-components";
import Icon from "./Icon";
import { IconType, THEME } from "../types";
import { PIXEL_SIZE } from "../constants";
import PixelCard, { PixelCardBorder, PixelCardContent } from "./PixelCard";
import { CopySmallSVG } from "./SVGIcons";
import { useAppSelector } from "../hooks";
import { selectTheme } from "../features/theme/themeSlice";

const CopyIcon = styled(CopySmallSVG)`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  margin-left: ${PIXEL_SIZE}px;
  height: ${PIXEL_SIZE * 3}px;
  width: ${PIXEL_SIZE * 3}px;
`;

const SocialLinkWrapper = styled.a`
  color: #445a73;
  display: inline-flex;
  width: 100%;
  font-size: 1.2em;
  justify-content: start;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #445a73;

    ${PixelCardBorder} {
      background: linear-gradient(
        180deg,
        rgba(199, 224, 229, 1) 0%,
        rgba(199, 224, 229, 1) 100%
      );
    }
  }

  &:focus {
    outline: none;

    ${PixelCardBorder} {
      background: rgba(148, 181, 188, 1);
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
  margin: 0;
  color: #6e96a6;
  font-size: 0.8em;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #94b5bc;
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
  const { isDarkTheme } = useAppSelector(selectTheme);
  const theme: THEME = useTheme();
  const handleSecondaryTextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (secondaryText) navigator.clipboard.writeText(secondaryText);
  };

  return (
    <SocialLinkWrapper href={href} aria-label={ariaLabel} target="_blank">
      <StyledPixelCard>
        <StyledIcon>
          <Icon
            type={icon}
            color={
              isDarkTheme ? theme.palette.icon.dark : theme.palette.icon.light
            }
          />
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
