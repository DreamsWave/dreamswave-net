export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

type getAspectRatioParams = {
  maxAspectRatio: number;
  minAspectRatio: number;
  currentWidth?: number;
  mobileWidth: number;
  fullScreenWidth: number;
};

export const getAspectRatio = ({
  maxAspectRatio = 2,
  minAspectRatio = 0.6,
  currentWidth = getWindowDimensions().width,
  mobileWidth = 320,
  fullScreenWidth = 1920,
}: getAspectRatioParams) => {
  const aspectRatio =
    ((maxAspectRatio - minAspectRatio) *
      Math.max(0, currentWidth - mobileWidth)) /
      (fullScreenWidth - mobileWidth) +
    minAspectRatio;
  return aspectRatio;
};

export const hexToRgba = (hex: string, alpha?: number): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};
