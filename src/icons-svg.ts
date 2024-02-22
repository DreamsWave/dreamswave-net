export type IconNames =
  | "art-station"
  | "discord"
  | "email"
  | "github"
  | "instagram"
  | "spotify"
  | "telegram"
  | "twitch"
  | "twitter"
  | "vk"
  | "copy"
  | "copy-small"
  | "sun"
  | "moon"
  | "alian"
  | "pixel-size"
  | "pixel-size-small"
  | "lang-en"
  | "lang-ru"
  | "copyright";

export type Icons = Record<
  IconNames,
  { paths: string[]; width: number; height: number }
>;

const icons: Icons = {
  "art-station": {
    paths: [
      "M4 0h2v1H4zM5 1h2v2H5zM3 2h1v4H3z M2 3h3v3H2zM6 3h2v2H6z M1 5h5v1H1zM7 5h2v2H7zM0 7h6v1H0zM8 7h2v1H8zM1 8h6v1H1zM8 8h1v1H8z",
    ],
    width: 10,
    height: 9,
  },
  discord: {
    paths: [
      "M2 0h2v1H2zM6 0h2v1H6zM1 1h1v1H1zM4 1h2v1H4zM8 1h1v1H8zM0 2h1v5H0zM9 2h1v5H9zM3 4h1v1H3zM6 4h1v1H6zM3 6h4v1H3zM1 7h2v1H1zM7 7h2v1H7z",
    ],
    width: 10,
    height: 8,
  },
  email: {
    paths: [
      "M1 0h8v1H1zM0 1h2v1H0zM8 1h2v1H8zM0 2h1v5H0zM2 2h1v1H2zM7 2h1v1H7zM9 2h1v5H9zM3 3h1v1H3zM6 3h1v1H6zM2 4h1v1H2zM4 4h2v1H4zM7 4h1v1H7zM1 5h1v1H1z M8 5h2v1H8zM1 7h8v1H1z",
    ],
    width: 10,
    height: 8,
  },
  github: {
    paths: [
      "M2 0h2v1H2zM7 0h2v1H7zM2 1h1v1H2zM4 1h3v1H4zM8 1h1v1H8zM1 2h1v3H1zM9 2h1v3H9zM2 5h2v1H2zM7 5h2v1H7zM4 6h3v1H4zM0 7h1v1H0zM2 7h2v1H2zM7 7h1v2H7zM1 8h1v1H1zM3 8h1v1H3zM4 9h3v1H4z",
    ],
    width: 10,
    height: 10,
  },
  instagram: {
    paths: [
      "M1 0h8v1H1zM0 1h1v8H0zM9 1h1v8H9zM7 2h1v1H7zM4 3h2v1H4zM3 4h1v2H3zM6 4h1v2H6zM4 6h2v1H4zM1 9h8v1H1z",
    ],
    width: 10,
    height: 10,
  },
  spotify: {
    paths: [
      "M3 0h4v1H3zM2 1h1v1H2zM7 1h1v1H7zM1 2h1v1H1zM3 2h4v1H3zM8 2h1v1H8zM0 3h1v4H0zM2 3h1v1H2zM7 3h1v1H7zM9 3h1v4H9zM3 4h4v1H3zM2 5h1v1H2zM7 5h1v1H7zM4 6h2v1H4zM1 7h1v1H1zM3 7h1v1H3zM6 7h1v1H6zM8 7h1v1H8zM2 8h1v1H2zM7 8h1v1H7zM3 9h4v1H3z",
    ],
    width: 10,
    height: 10,
  },
  telegram: {
    paths: [
      "M8 0h2v1H8zM6 1h2v1H6zM9 1h1v1H9zM4 2h2v1H4zM8 2h1v3H8zM2 3h2v1H2zM0 4h2v1H0zM5 4h1v1H5zM0 5h1v1H0zM4 5h1v1H4zM7 5h1v3H7zM1 6h1v1H1zM3 6h1v3H3z M2 7h2v2H2zM4 8h1v1H4zM6 8h1v2H6z M5 9h2v1H5z",
    ],
    width: 10,
    height: 10,
  },
  twitch: {
    paths: [
      "M1 0h9v1H1zM0 1h2v7H0zM9 1h1v5H9zM4 2h1v2H4zM7 2h1v2H7z M8 5h2v1H8zM2 6h1v4H2zM5 6h4v1H5zM4 7h4v1H4zM3 8h1v1H3z",
    ],
    width: 10,
    height: 10,
  },
  twitter: {
    paths: [
      "M0 0h2v1H0zM7 0h1v1H7zM0 1h1v1H0zM2 1h1v1H2zM6 1h1v1H6zM1 2h1v1H1zM3 2h1v1H3zM5 2h1v1H5zM2 3h1v1H2zM4 3h1v1H4zM3 4h1v1H3zM5 4h1v1H5zM2 5h1v1H2zM4 5h1v1H4zM6 5h1v1H6zM1 6h1v1H1zM5 6h1v1H5zM7 6h1v2H7zM0 7h1v1H0zM6 7h2v1H6z",
    ],
    width: 8,
    height: 8,
  },
  vk: {
    paths: [
      "M0 0h2v3H0zM4 0h2v8H4zM8 0h2v3H8zM2 2h1v4H2z M7 2h3v1H7zM1 3h2v2H1zM6 3h3v2H6z M3 4h6v1H3zM3 5h3v2H3zM7 5h3v1H7zM8 6h2v2H8z",
    ],
    width: 10,
    height: 8,
  },
  copy: {
    paths: [
      "M4 0h5v1H4zM3 1h1v2H3zM9 1h1v6H9z M1 2h5v1H1zM0 3h1v6H0zM6 3h1v6H6zM7 7h2v1H7zM1 9h5v1H1z",
    ],
    width: 10,
    height: 10,
  },
  "copy-small": {
    paths: [
      "M2 0h3v1H2zM0 1h3v1H0zM4 1h1v3H4zM0 2h1v3H0zM2 2h1v3H2z M3 3h2v1H3zM1 4h2v1H1z",
    ],
    width: 5,
    height: 5,
  },
  sun: {
    paths: [
      "M4 0h1v1H4zM1 1h1v1H1zM8 1h1v1H8zM4 2h2v6H4z M3 3h4v4H3z M2 4h6v2H2zM9 4h1v1H9zM0 5h1v1H0zM1 8h1v1H1zM8 8h1v1H8zM5 9h1v1H5z",
    ],
    width: 10,
    height: 10,
  },
  moon: {
    paths: [
      "M2 0h2v1H2zM1 1h2v8H1z M0 2h3v5H0zM3 4h1v6H3zM4 6h2v4H4zM9 6h1v2H9z M6 7h4v1H6zM6 8h3v1H6zM6 9h2v1H6z",
    ],
    width: 10,
    height: 10,
  },
  alian: {
    paths: [
      "M2 1h1v1H2zM7 1h1v1H7zM3 2h1v2H3zM6 2h1v2H6zM0 3h1v2H0z M2 3h6v1H2zM9 3h1v2H9zM2 4h1v3H2zM4 4h2v3H4zM7 4h1v3H7z M1 5h8v1H1zM3 6h5v1H3zM3 7h1v1H3zM6 7h1v1H6zM2 8h1v1H2zM7 8h1v1H7z",
    ],
    width: 10,
    height: 10,
  },
  "pixel-size": {
    paths: ["M5 0h3v3H5zM2 1h2v2H2zM0 2h1v1H0z"],
    width: 8,
    height: 3,
  },
  "pixel-size-small": {
    paths: ["M4 0h1v3H4zM2 1h1v2H2zM0 2h1v1H0z"],
    width: 5,
    height: 3,
  },
  "lang-en": {
    paths: [
      "M0 0h3v1H0zM4 0h1v5H4zM8 0h1v5H8zM0 1h1v4H0zM5 1h1v1H5zM1 2h2v1H1zM6 2h1v1H6z",
      "M7 3h2v1H7zM1 4h2v1H1z",
    ],
    width: 9,
    height: 5,
  },
  "lang-ru": {
    paths: [
      "M0 0h2v1H0zM4 0h1v4H4zM7 0h1v4H7zM0 1h1v4H0zM2 1h1v1H2zM1 2h1v1H1zM2 3h1v2H2zM5 4h2v1H5z",
    ],
    width: 8,
    height: 5,
  },
  copyright: {
    paths: [
      "M3 0h4v1H3zM2 1h1v1H2zM7 1h1v1H7zM1 2h1v1H1zM8 2h1v1H8zM0 3h1v4H0zM4 3h2v1H4zM9 3h1v4H9zM3 4h1v2H3zM4 6h2v1H4zM1 7h1v1H1zM8 7h1v1H8zM2 8h1v1H2zM7 8h1v1H7zM3 9h4v1H3z",
    ],
    width: 10,
    height: 10,
  },
};

export default icons;
