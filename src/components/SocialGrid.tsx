import styled from "styled-components";
import SocialButton from "./SocialButton";
import { PIXEL_SIZE } from "../constants";
import PixelCard from "./PixelCard";

const SocialGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${PIXEL_SIZE * 6}px;
`;

const SocialGridRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SocialGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: ${PIXEL_SIZE * 5}px;
  gap: ${PIXEL_SIZE * 5}px;

  @media (max-width: ${PIXEL_SIZE * 76}px) {
    padding: ${PIXEL_SIZE * 3}px;
    gap: ${PIXEL_SIZE * 3}px;
  }
`;

const StyledPixelCard = styled(PixelCard)`
  width: 100%;
`;

function SocialGrid() {
  return (
    <SocialGridWrapper>
      <SocialGridRoot>
        <StyledPixelCard>
          <SocialGridContainer>
            <SocialButton
              href="mailto:idreamzzer@gmail.com"
              ariaLabel="Email address"
              icon="email"
              text="Email"
            />
            <SocialButton
              href="https://t.me/dreamswave_tg"
              ariaLabel="Telegram account"
              icon="telegram"
              text="Telegram"
            />
            <SocialButton
              href="https://github.com/DreamsWave"
              ariaLabel="GitHub account"
              icon="github"
              text="GitHub"
            />
            <SocialButton
              href="https://twitter.com/dreamswave_tw"
              ariaLabel="Twitter account"
              icon="twitter"
              text="Twitter"
            />
            <SocialButton
              href="https://www.instagram.com/dreamswave_ig/"
              ariaLabel="Instagram account"
              icon="instagram"
              text="Instagram"
            />
            <SocialButton
              href="https://vk.com/dreamswave"
              ariaLabel="VKontakte account"
              icon="vk"
              text="VK"
            />
            <SocialButton
              href="https://discordapp.com/users/272297862400966656"
              ariaLabel="Discord account"
              icon="discord"
              text="Discord"
            />
            <SocialButton
              href="https://www.artstation.com/dreamswave"
              ariaLabel="ArtStation account"
              icon="artstation"
              text="ArtStation"
            />

            <SocialButton
              href="https://www.twitch.tv/dreamswave"
              ariaLabel="Twitch account"
              icon="twitch"
              text="Twitch"
            />
            <SocialButton
              href="https://open.spotify.com/user/bd03luynomqvrick2r7y1f7hf?si=d17e4f01858b465f"
              ariaLabel="Spotify account"
              icon="spotify"
              text="Spotify"
            />
          </SocialGridContainer>
        </StyledPixelCard>
      </SocialGridRoot>
    </SocialGridWrapper>
  );
}

export default SocialGrid;
