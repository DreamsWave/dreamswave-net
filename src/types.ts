export type Theme = "light" | "dark";

export type ImageNames =
  | "cloudBack"
  | "cloudLeft"
  | "cloudMiddle"
  | "cloudRight"
  | "stars";

export type ThemeImages = {
  [image in ImageNames]: string;
};

export type ThemesImages = {
  [theme in Theme]: ThemeImages;
};

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
