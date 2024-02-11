import styled from "styled-components";
import PixelCard from "./PixelCard";
import SocialLink from "./SocialLink";
import SocialButton from "./SocialButton";

const pixelSize = 5;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  max-width: ${pixelSize * 200}px;
  margin: 0 auto;
  padding: ${pixelSize * 2}px;
  position: relative;
`;

const StyledPixelCard = styled(PixelCard)`
  width: 100%;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${pixelSize * 4}px;
`;

const SocialsList = styled.div`
  display: flex;
  align-items: start;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: ${pixelSize * 2}px ${pixelSize * 4}px;
`;

function Socials() {
  return (
    <SocialsWrapper>
      <StyledPixelCard>
        <StyledContainer>
          <div>
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
          </div>
          <SocialsList>
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
              href="https://www.artstation.com/dreamswave"
              ariaLabel="ArtStation account"
              icon="artstation"
              text="ArtStation"
            />
            <SocialButton
              href="https://github.com/DreamsWave"
              ariaLabel="GitHub account"
              icon="github"
              text="GitHub"
            />
            <SocialButton
              href="https://t.me/dreamswave_tg"
              ariaLabel="Telegram account"
              icon="telegram"
              text="Telegram"
            />
            <SocialButton
              href="mailto:idreamzzer@gmail.com"
              ariaLabel="Email address"
              icon="email"
              text="Email"
            />
            <SocialButton
              href="https://www.twitch.tv/dreamswave"
              ariaLabel="Twitch account"
              icon="twitch"
              text="Twitch"
            />
            <SocialButton
              href="https://discordapp.com/users/272297862400966656"
              ariaLabel="Discord account"
              icon="discord"
              text="Discord"
            />
            <SocialButton
              href="https://open.spotify.com/user/bd03luynomqvrick2r7y1f7hf?si=d17e4f01858b465f"
              ariaLabel="Spotify account"
              icon="spotify"
              text="Spotify"
            />
            <SocialButton
              href="https://vk.com/dreamswave"
              ariaLabel="VKontakte account"
              icon="vk"
              text="VK"
            />
          </SocialsList>
        </StyledContainer>
      </StyledPixelCard>
    </SocialsWrapper>
  );
}

export default Socials;
