import styled from "styled-components";
import { PIXEL_SIZE } from "../constants";
import PixelCard from "./PixelCard";
import SocialLink from "./SocialLink";
import About from "./About";

const SocialListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${PIXEL_SIZE * 6}px;
`;

const SocialListRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 340px;
  max-width: ${PIXEL_SIZE * 76}px;
  position: relative;

  @media (max-width: ${PIXEL_SIZE * 76}px) {
    max-width: 340px;
  }
`;

const SocialListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: ${PIXEL_SIZE * 5}px;
  gap: ${PIXEL_SIZE * 3}px;

  @media (max-width: ${PIXEL_SIZE * 76}px) {
    padding: ${PIXEL_SIZE * 3}px;
    gap: ${PIXEL_SIZE * 3}px;
  }
`;

const StyledPixelCard = styled(PixelCard)`
  width: 100%;
`;

function SocialList() {
  return (
    <SocialListWrapper>
      <About />
      <SocialListRoot>
        <StyledPixelCard>
          <SocialListContainer>
            <SocialLink
              href="mailto:idreamzzer@gmail.com"
              ariaLabel="Email address"
              icon="email"
              text="Email"
              secondaryText="idreamzzer@gmail.com"
            />
            <SocialLink
              href="https://t.me/dreamswave_tg"
              ariaLabel="Telegram account"
              icon="telegram"
              text="Telegram"
              secondaryText="@dreamswave_tg"
            />
            <SocialLink
              href="https://github.com/DreamsWave"
              ariaLabel="GitHub account"
              icon="github"
              text="GitHub"
              secondaryText="DreamsWave"
            />
            <SocialLink
              href="https://twitter.com/dreamswave_tw"
              ariaLabel="Twitter account"
              icon="twitter"
              text="Twitter"
              secondaryText="@dreamswave_tw"
            />
            <SocialLink
              href="https://www.instagram.com/dreamswave_ig/"
              ariaLabel="Instagram account"
              icon="instagram"
              text="Instagram"
              secondaryText="@dreamswave_ig"
            />
            <SocialLink
              href="https://vk.com/dreamswave"
              ariaLabel="VKontakte account"
              icon="vk"
              text="VK"
              secondaryText="dreamswave"
            />
            <SocialLink
              href="https://discordapp.com/users/272297862400966656"
              ariaLabel="Discord account"
              icon="discord"
              text="Discord"
              secondaryText="dreamswave"
            />
            <SocialLink
              href="https://www.artstation.com/dreamswave"
              ariaLabel="ArtStation account"
              icon="artstation"
              text="ArtStation"
              secondaryText="dreamswave"
            />

            <SocialLink
              href="https://www.twitch.tv/dreamswave"
              ariaLabel="Twitch account"
              icon="twitch"
              text="Twitch"
              secondaryText="dreamswave"
            />
            <SocialLink
              href="https://open.spotify.com/user/bd03luynomqvrick2r7y1f7hf?si=d17e4f01858b465f"
              ariaLabel="Spotify account"
              icon="spotify"
              text="Spotify"
            />
          </SocialListContainer>
        </StyledPixelCard>
      </SocialListRoot>
    </SocialListWrapper>
  );
}

export default SocialList;
