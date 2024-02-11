import styled from "styled-components";
import Icon from "./Icon";
import { IconType } from "../types";

const pixelSize = 5;

const SocialLinkWrapper = styled.a`
  color: #445a73;
  display: inline-flex;
  width: 100%;
  padding: ${pixelSize * 3}px ${pixelSize * 2}px;
  font-size: 1.5em;
  justify-content: start;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #94b5bc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${pixelSize}px #445a73;
  }
`;

const StyledIcon = styled(Icon)`
  margin-left: ${pixelSize * 3}px;
  margin-right: ${pixelSize * 3}px;
`;

type SocialLinkProps = {
  href: string;
  ariaLabel: string;
  icon: IconType;
  text: string;
};
function SocialLink({ href, ariaLabel, icon, text }: SocialLinkProps) {
  return (
    <SocialLinkWrapper href={href} aria-label={ariaLabel} target="_blank">
      <StyledIcon type={icon} />
      {text}
    </SocialLinkWrapper>
  );
}

export default SocialLink;
