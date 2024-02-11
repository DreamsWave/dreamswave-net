import cloudBackImage from "./assets/images/hero/cloud-back.png";
import cloudLeftImage from "./assets/images/hero/cloud-left.png";
import cloudMiddleImage from "./assets/images/hero/cloud-middle.png";
import cloudRightImage from "./assets/images/hero/cloud-right.png";
import starsImage from "./assets/images/hero/stars.png";
import darkCloudBackImage from "./assets/images/hero/dark/cloud-back.png";
import darkCloudLeftImage from "./assets/images/hero/dark/cloud-left.png";
import darkCloudMiddleImage from "./assets/images/hero/dark/cloud-middle.png";
import darkCloudRightImage from "./assets/images/hero/dark/cloud-right.png";
import darkStarsImage from "./assets/images/hero/dark/stars.png";
import { IconPaths } from "./types";

export const IMAGES = {
  light: {
    cloudBack: cloudBackImage,
    cloudLeft: cloudLeftImage,
    cloudMiddle: cloudMiddleImage,
    cloudRight: cloudRightImage,
    stars: starsImage,
  },
  dark: {
    cloudBack: darkCloudBackImage,
    cloudLeft: darkCloudLeftImage,
    cloudMiddle: darkCloudMiddleImage,
    cloudRight: darkCloudRightImage,
    stars: darkStarsImage,
  },
};

export const ICONS_PATHS: IconPaths = {
  artstation: [
    "M4 0h2v1H4zM5 1h2v2H5zM3 2h1v4H3z",
    "M2 3h3v3H2zM6 3h2v2H6z",
    "M1 5h5v1H1zM7 5h2v2H7zM0 7h6v1H0zM8 7h2v1H8zM1 8h6v1H1zM8 8h1v1H8z",
  ],
  discord: [
    "M2 0h2v1H2zM6 0h2v1H6zM1 1h1v1H1zM4 1h2v1H4zM8 1h1v1H8zM0 2h1v5H0zM9 2h1v5H9zM3 4h1v1H3zM6 4h1v1H6zM3 6h4v1H3zM1 7h2v1H1zM7 7h2v1H7z",
  ],
  email: [
    "M1 0h8v1H1zM0 1h2v1H0zM8 1h2v1H8zM0 2h1v5H0zM2 2h1v1H2zM7 2h1v1H7zM9 2h1v5H9zM3 3h1v1H3zM6 3h1v1H6zM2 4h1v1H2zM4 4h2v1H4zM7 4h1v1H7zM1 5h1v1H1z",
    "M8 5h2v1H8zM1 7h8v1H1z",
  ],
  github: [
    "M2 0h2v1H2zM7 0h2v1H7zM2 1h1v1H2zM4 1h3v1H4zM8 1h1v1H8zM1 2h1v3H1zM9 2h1v3H9zM2 5h2v1H2zM7 5h2v1H7zM4 6h3v1H4zM0 7h1v1H0zM2 7h2v1H2zM7 7h1v2H7zM1 8h1v1H1zM3 8h1v1H3zM4 9h3v1H4z",
  ],
  instagram: [
    "M1 0h8v1H1zM0 1h1v8H0zM9 1h1v8H9zM7 2h1v1H7zM4 3h2v1H4zM3 4h1v2H3zM6 4h1v2H6zM4 6h2v1H4zM1 9h8v1H1z",
  ],
  spotify: [
    "M3 0h4v1H3zM2 1h1v1H2zM7 1h1v1H7zM1 2h1v1H1zM3 2h4v1H3zM8 2h1v1H8zM0 3h1v4H0zM2 3h1v1H2zM7 3h1v1H7zM9 3h1v4H9zM3 4h4v1H3zM2 5h1v1H2zM7 5h1v1H7zM4 6h2v1H4zM1 7h1v1H1zM3 7h1v1H3zM6 7h1v1H6zM8 7h1v1H8zM2 8h1v1H2zM7 8h1v1H7zM3 9h4v1H3z",
  ],
  telegram: [
    "M8 0h2v1H8zM6 1h2v1H6zm3 0h1v1H9zM4 2h2v1H4zm4 0h1v3H8zM2 3h2v1H2zM0 4h2v1H0zm5 0h1v1H5zM0 5h1v1H0zm4 0h1v1H4zm3 0h1v3H7zM1 6h1v1H1zm2 0h1v3H3z",
    "M2 7h2v2H2zm2 1h1v1H4zm2 0h1v2H6z",
    "M5 9h2v1H5z",
  ],
  twitch: [
    "M1 0h9v1H1zM0 1h2v7H0zM9 1h1v5H9zM4 2h1v2H4zM7 2h1v2H7z",
    "M8 5h2v1H8zM2 6h1v4H2zM5 6h4v1H5zM4 7h4v1H4zM3 8h1v1H3z",
  ],
  twitter: [
    "M0 0h2v1H0zM7 0h1v1H7zM0 1h1v1H0zM2 1h1v1H2zM6 1h1v1H6zM1 2h1v1H1zM3 2h1v1H3zM5 2h1v1H5zM2 3h1v1H2zM4 3h1v1H4zM3 4h1v1H3zM5 4h1v1H5zM2 5h1v1H2zM4 5h1v1H4zM6 5h1v1H6zM1 6h1v1H1zM5 6h1v1H5zM7 6h1v2H7zM0 7h1v1H0z",
    "M6 7h2v1H6z",
  ],
  vk: [
    "M0 0h2v3H0zM4 0h2v8H4zM8 0h2v3H8zM2 2h1v4H2z",
    "M7 2h3v1H7zM1 3h2v2H1zM6 3h3v2H6z",
    "M3 4h6v1H3zM3 5h3v2H3zM7 5h3v1H7zM8 6h2v2H8z",
  ],
};
