import styled from "styled-components";
import Icon from "./Icon";
import { IconType } from "../types";
import PixelCard, { PixelCardBorder, PixelCardContent } from "./PixelCard";
import { PIXEL_SIZE } from "../constants";

const SocialButtonLink = styled.a`
  color: #445a73;
  display: inline-flex;
  width: ${PIXEL_SIZE * 18}px;
  font-size: 1.2em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
      // background: rgba(199, 224, 229, 1);
      // background: rgba(148, 181, 188, 1);
    }
  }

  &:focus {
    outline: none;

    ${PixelCardBorder} {
      background: rgba(148, 181, 188, 1);
    }
  }
`;

const IconWrapper = styled(PixelCard)`
  ${PixelCardContent} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${PIXEL_SIZE * 16}px;
    width: ${PIXEL_SIZE * 16}px;
  }
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
`;

type SocialButtonProps = {
  href: string;
  ariaLabel: string;
  icon: IconType;
  text: string;
};
function SocialButton({ href, ariaLabel, icon, text }: SocialButtonProps) {
  return (
    <SocialButtonLink href={href} aria-label={ariaLabel} target="_blank">
      <IconWrapper>
        <Icon type={icon} color="#94b5bc" />
      </IconWrapper>
      <Text>{text}</Text>
    </SocialButtonLink>
  );
}

export default SocialButton;
