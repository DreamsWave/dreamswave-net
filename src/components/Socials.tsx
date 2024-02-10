import styled from "styled-components";
import PixelCard from "./PixelCard";
import SocialLink from "./SocialLink";

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

function Socials() {
  return (
    <SocialsWrapper>
      <PixelCard>
        <SocialLink
          href="https://twitter.com/dreamswave_tw"
          ariaLabel="Twitter account"
          icon="twitter"
          text="Twitter"
        />
        <SocialLink
          href="https://www.instagram.com/dreamswave_ig/"
          ariaLabel="Instagram account"
          icon="instagram"
          text="Instagram"
        />
        <SocialLink
          href="https://www.artstation.com/dreamswave"
          ariaLabel="ArtStation account"
          icon="artstation"
          text="ArtStation"
        />
        <SocialLink
          href="https://github.com/DreamsWave"
          ariaLabel="GitHub account"
          icon="github"
          text="GitHub"
        />
        <SocialLink
          href="https://t.me/dreamswave_tg"
          ariaLabel="Telegram account"
          icon="telegram"
          text="Telegram"
        />
        <SocialLink
          href="mailto:idreamzzer@gmail.com"
          ariaLabel="Email address"
          icon="email"
          text="Email"
        />
        <SocialLink
          href="https://www.twitch.tv/dreamswave"
          ariaLabel="Twitch account"
          icon="twitch"
          text="Twitch"
        />
        <SocialLink
          href="https://discordapp.com/users/272297862400966656"
          ariaLabel="Discord account"
          icon="discord"
          text="Discord"
        />
        <SocialLink
          href="https://open.spotify.com/user/bd03luynomqvrick2r7y1f7hf?si=d17e4f01858b465f"
          ariaLabel="Spotify account"
          icon="spotify"
          text="Spotify"
        />
        <SocialLink
          href="https://vk.com/dreamswave"
          ariaLabel="VKontakte account"
          icon="vk"
          text="VK"
        />
      </PixelCard>
    </SocialsWrapper>
  );
}

export default Socials;
