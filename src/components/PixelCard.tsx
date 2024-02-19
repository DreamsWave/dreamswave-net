import styled from "styled-components";
import PixelBorders from "./PixelBorders";

const PixelCardRoot = styled.div`
  position: relative;
  display: flex;
`;

export const PixelCardContent = styled.div(({ theme }) => ({
  background: `linear-gradient(180deg, ${theme.palette.gradient.from} 0%, ${theme.palette.gradient.to} 100%)`,
  backdropFilter: "blur(5px)",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  margin: theme.spacing(1),
  position: "relative",
  transition: `all ${theme.transitions.duration.standard}ms`,
  zIndex: theme.zIndex.pixelCardContent,
}));

type PixelCardProps = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  bordersFocus?: boolean;
  bordersHover?: boolean;
};
function PixelCard({
  children,
  className,
  contentClassName,
  bordersFocus = false,
  bordersHover = false,
}: PixelCardProps) {
  return (
    <PixelCardRoot className={className}>
      <PixelBorders focus={bordersFocus} hover={bordersHover} />
      <PixelCardContent className={contentClassName}>
        {children}
      </PixelCardContent>
    </PixelCardRoot>
  );
}

export default PixelCard;
