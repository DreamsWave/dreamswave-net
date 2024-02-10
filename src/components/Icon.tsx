import { ReactSVG } from "react-svg";
import artstationIcon from "../assets/images/icons/artstation.svg";
import discordIcon from "../assets/images/icons/discord.svg";
import emailIcon from "../assets/images/icons/email.svg";
import githubIcon from "../assets/images/icons/github.svg";
import instagramIcon from "../assets/images/icons/instagram.svg";
import spotifyIcon from "../assets/images/icons/spotify.svg";
import telegramIcon from "../assets/images/icons/telegram.svg";
import twitchIcon from "../assets/images/icons/twitch.svg";
import twitterIcon from "../assets/images/icons/twitter.svg";
import vkIcon from "../assets/images/icons/vk.svg";
import { useMemo } from "react";

const pixelSize = 5;

export type IconType =
  | "artstation"
  | "discord"
  | "email"
  | "github"
  | "instagram"
  | "spotify"
  | "telegram"
  | "twitch"
  | "twitter"
  | "vk";
type IconPaths = { [K in IconType]: string };

const icons: IconPaths = {
  artstation: artstationIcon,
  discord: discordIcon,
  email: emailIcon,
  github: githubIcon,
  instagram: instagramIcon,
  spotify: spotifyIcon,
  telegram: telegramIcon,
  twitch: twitchIcon,
  twitter: twitterIcon,
  vk: vkIcon,
};

type IconProps = {
  type: IconType;
  color?: string;
};
const Icon = ({ type, color = "#94b5bc" }: IconProps) => {
  const svgProps = useMemo(
    () => ({
      fill: color,
      width: (pixelSize * 10).toString(),
      height: (pixelSize * 10).toString(),
      viewBox: "0 0 10 10",
    }),
    [color]
  );

  return (
    <ReactSVG
      src={icons[type]}
      beforeInjection={(svg) => {
        Object.entries(svgProps).forEach(([key, value]) => {
          svg.setAttribute(key, value);
        });
      }}
    />
  );
};

export default Icon;
