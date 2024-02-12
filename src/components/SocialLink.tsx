import styled from "styled-components";
import Icon from "./Icon";
import { IconType } from "../types";
import { PIXEL_SIZE } from "../constants";
import PixelCard, { PixelCardBorder, PixelCardContent } from "./PixelCard";

const SocialLinkWrapper = styled.a`
  color: #445a73;
  display: inline-flex;
  width: 100%;
  font-size: 1.2em;
  justify-content: start;
  transition: color 0.2s ease-in-out;
  font-family: "Montserrat Variable", sans-serif;

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

const StyledIcon = styled(Icon)`
  margin-left: ${PIXEL_SIZE * 3}px;
  margin-right: ${PIXEL_SIZE * 3}px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 0;
`;

const SecondaryText = styled.p`
  margin: 0;
  color: #6e96a6;
  font-size: 0.8em;
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
  return (
    <SocialLinkWrapper href={href} aria-label={ariaLabel} target="_blank">
      <StyledPixelCard>
        <StyledIcon type={icon} />
        <TextContainer>
          <Text>{text}</Text>
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </TextContainer>
      </StyledPixelCard>
    </SocialLinkWrapper>
  );
}

export default SocialLink;
