import { IconType } from "../types";
import * as SVGIcons from "./SVGIcons";

type IconProps = {
  type: IconType;
  color?: string;
  className?: string;
};
const Icon = ({ type, color = "#94b5bc", className }: IconProps) => {
  switch (type) {
    case "artstation":
      return <SVGIcons.ArtStationSVG color={color} className={className} />;
    case "discord":
      return <SVGIcons.DiscordSVG color={color} className={className} />;
    case "email":
      return <SVGIcons.EmailSVG color={color} className={className} />;
    case "github":
      return <SVGIcons.GithubSVG color={color} className={className} />;
    case "instagram":
      return <SVGIcons.InstagramSVG color={color} className={className} />;
    case "spotify":
      return <SVGIcons.SpotifySVG color={color} className={className} />;
    case "telegram":
      return <SVGIcons.TelegramSVG color={color} className={className} />;
    case "twitch":
      return <SVGIcons.TwitchSVG color={color} className={className} />;
    case "twitter":
      return <SVGIcons.TwitterSVG color={color} className={className} />;
    case "vk":
      return <SVGIcons.VKSVG color={color} className={className} />;
  }
};

export default Icon;
