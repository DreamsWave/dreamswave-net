import styled from "styled-components";
import Icon from "./Icon";
import { IconType } from "../types";
import PixelCard, { PixelCardContent } from "./PixelCard";

const pixelSize = 5;

const SocialButtonLink = styled.a`
  color: #445a73;
  display: inline-flex;
  width: ${pixelSize * 25}px;
  padding: ${pixelSize * 3}px ${pixelSize * 2}px;
  font-size: 1.2em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: color 0.2s ease-in-out;
  font-family: "Montserrat Variable", sans-serif;

  &:hover {
    color: #94b5bc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${pixelSize}px #445a73;
  }
`;

const IconWrapper = styled(PixelCard)`
  ${PixelCardContent} {
    padding: ${pixelSize * 2}px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
      {text}
    </SocialButtonLink>
  );
}

export default SocialButton;
