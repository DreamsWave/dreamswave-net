import styled from "styled-components";
import SocialLink from "./SocialLink";

const SocialListRoot = styled.div(({ theme }) => ({
  minWidth: "340px",
  width: "100%",
  maxWidth: "800px",
  position: "relative",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: theme.spacing(5),
  [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
    gridTemplateColumns: "1fr",
  },
}));

function SocialList() {
  return (
    <SocialListRoot>
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
        icon="art-station"
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
    </SocialListRoot>
  );
}

export default SocialList;
