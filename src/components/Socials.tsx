import styled from "styled-components";
import PixelCard from "./PixelCard";

const pixelSize = 5;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  max-width: ${pixelSize * 100}px;
  margin: 0 auto;
  padding: ${pixelSize * 2}px;
  position: relative;
`;

const SocialsList = styled.ul`
  height: 100%;
  width: 100%;
  padding: 0 ${pixelSize * 6}px;
  margin: 0;
  list-style: none;
`;

const SocialsListItem = styled.li`
  border-bottom: ${pixelSize}px solid rgba(199, 224, 229, 1);
  &:last-child {
    border-bottom: none;
  }
`;

const SocialsLink = styled.a`
  color: #445a73;
  display: inline-flex;
  width: 100%;
  padding: ${pixelSize * 3}px ${pixelSize * 2}px;
  font-size: 1.5em;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #94b5bc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${pixelSize}px #445a73;
  }
`;

function Socials() {
  return (
    <SocialsWrapper>
      <PixelCard>
        <SocialsList>
          <SocialsListItem>
            <SocialsLink
              href="https://twitter.com/dreamswave_tw"
              target="_blank"
              aria-label="Twitter account"
            >
              Twitter
            </SocialsLink>
          </SocialsListItem>
          <SocialsListItem>
            <SocialsLink
              href="https://github.com/DreamsWave"
              target="_blank"
              aria-label="Github account"
            >
              Github
            </SocialsLink>
          </SocialsListItem>
          <SocialsListItem>
            <SocialsLink
              href="https://t.me/dreamswave_tg"
              target="_blank"
              aria-label="Telegram account"
            >
              Telegram
            </SocialsLink>
          </SocialsListItem>
          <SocialsListItem>
            <SocialsLink
              href="mailto:idreamzzer@gmail.com"
              target="_blank"
              aria-label="Email address"
            >
              Email
            </SocialsLink>
          </SocialsListItem>
        </SocialsList>
      </PixelCard>
    </SocialsWrapper>
  );
}

export default Socials;
