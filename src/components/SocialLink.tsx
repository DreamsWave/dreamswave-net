import styled from "styled-components";
import Icon from "./Icon";
import { IconType } from "../types";
import { PIXEL_SIZE } from "../constants";

const SocialLinkWrapper = styled.a`
  color: #445a73;
  display: inline-flex;
  width: 100%;
  padding: ${PIXEL_SIZE * 3}px ${PIXEL_SIZE * 2}px;
  font-size: 1.5em;
  justify-content: start;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #94b5bc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${PIXEL_SIZE}px #445a73;
  }
`;

const StyledIcon = styled(Icon)`
  margin-left: ${PIXEL_SIZE * 3}px;
  margin-right: ${PIXEL_SIZE * 3}px;
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
