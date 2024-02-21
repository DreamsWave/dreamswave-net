import { animated, useSpring } from "@react-spring/web";
import styled, { useTheme } from "styled-components";
import AvatarImage from "../assets/images/avatar.png";

const AvatarRoot = styled.div<{ $size: string }>(({ theme, $size }) => ({
  height: $size,
  width: $size,
  position: `relative`,
  marginRight: theme.spacing(5),
  marginBottom: 0,

  [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
    marginRight: 0,
    marginBottom: theme.spacing(5),
  },
}));

const AvatarImg = styled(animated.img)`
  height: calc(100% - 6px);
  width: calc(100% - 6px);
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 50%;
`;

const AvatarBorder = styled.svg`
  z-index: 66;
  position: absolute;
  top: 0;
  left: 0;
`;

type AvatarSize = "main" | "big";

interface AvatarProps {
  size?: AvatarSize;
  className?: string;
}

function Avatar({ size = "main", className }: AvatarProps) {
  const theme = useTheme();
  const dimensions = size === "main" ? 20 : 30;
  const avatarBackgroundTransition = useSpring({
    background: theme.palette.border.color,
  });
  const avatarFillTransition = useSpring({
    fill: theme.palette.border.color,
  });

  const svgPath =
    dimensions === 20
      ? "M7 0h6v1H7zM5 1h2v1H5zM13 1h2v1h-2zM4 2h1v1H4zM15 2h1v1h-1zM3 3h1v1H3zM16 3h1v1h-1zM2 4h1v1H2zM17 4h1v1h-1zM1 5h1v2H1zM18 5h1v2h-1zM0 7h1v6H0zM19 7h1v6h-1zM1 13h1v2H1zM18 13h1v2h-1zM2 15h1v1H2zM17 15h1v1h-1zM3 16h1v1H3zM16 16h1v1h-1zM4 17h1v1H4zM15 17h1v1h-1zM5 18h2v1H5zM13 18h2v1h-2zM7 19h6v1H7z"
      : "M12 0h6v1h-6zM9 1h3v1H9zM18 1h3v1h-3zM7 2h2v1H7zM21 2h2v1h-2zM6 3h1v1H6zM23 3h1v1h-1zM5 4h1v1H5zM24 4h1v1h-1zM4 5h1v1H4zM25 5h1v1h-1zM3 6h1v1H3zM26 6h1v1h-1zM2 7h1v2H2zM27 7h1v2h-1zM1 9h1v3H1zM28 9h1v3h-1zM0 12h1v6H0zM29 12h1v6h-1zM1 18h1v3H1zM28 18h1v3h-1zM2 21h1v2H2zM27 21h1v2h-1zM3 23h1v1H3zM26 23h1v1h-1zM4 24h1v1H4zM25 24h1v1h-1zM5 25h1v1H5zM24 25h1v1h-1zM6 26h1v1H6zM23 26h1v1h-1zM7 27h2v1H7zM21 27h2v1h-2zM9 28h3v1H9zM18 28h3v1h-3zM12 29h6v1h-6z";

  return (
    <AvatarRoot $size={theme.spacing(dimensions)} className={className}>
      <AvatarImg src={AvatarImage} style={avatarBackgroundTransition} />
      <AvatarBorder
        xmlns="http://www.w3.org/2000/svg"
        width={theme.spacing(dimensions)}
        height={theme.spacing(dimensions)}
        baseProfile="tiny"
        version="1.2"
        viewBox={`0 0 ${dimensions} ${dimensions}`}
      >
        <animated.g style={avatarFillTransition}>
          <path d={svgPath} />
        </animated.g>
      </AvatarBorder>
    </AvatarRoot>
  );
}

export default Avatar;
