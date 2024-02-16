import styled from "styled-components";

export const PixelCardBorder = styled.div(({ theme }) => ({
  position: "absolute",
  background: theme.palette.border.color,
  transition: `background ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  zIndex: theme.zIndex.pixelCardBorder,
}));

const TopBorder = styled(PixelCardBorder)(({ theme }) => ({
  width: `calc(100% - ${theme.spacing(2)})`,
  height: theme.spacing(1),
  top: 0,
  left: theme.spacing(1),
  background: `linear-gradient(180deg, ${theme.palette.border.gradient.from} 0%, ${theme.palette.border.gradient.from} 100%)`,
}));

const BottomBorder = styled(PixelCardBorder)(({ theme }) => ({
  width: `calc(100% - ${theme.spacing(2)})`,
  height: theme.spacing(1),
  bottom: 0,
  left: theme.spacing(1),
  background: `linear-gradient(180deg, ${theme.palette.border.gradient.to} 0%, ${theme.palette.border.gradient.to} 100%)`,
}));

const LeftBorder = styled(PixelCardBorder)(({ theme }) => ({
  width: theme.spacing(1),
  height: `calc(100% - ${theme.spacing(2)})`,
  top: theme.spacing(1),
  left: 0,
  background: `linear-gradient(180deg, ${theme.palette.border.gradient.from} 0%, ${theme.palette.border.gradient.to} 100%)`,
}));

const RightBorder = styled(PixelCardBorder)(({ theme }) => ({
  width: theme.spacing(1),
  height: `calc(100% - ${theme.spacing(2)})`,
  top: theme.spacing(1),
  right: 0,
  background: `linear-gradient(180deg, ${theme.palette.border.gradient.from} 0%, ${theme.palette.border.gradient.to} 100%)`,
}));

const PixelCardWrapper = styled.div`
  position: relative;
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

function PixelCard({
  children,
  className,
  contentClassName,
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <PixelCardWrapper className={className}>
      <TopBorder />
      <RightBorder />
      <BottomBorder />
      <LeftBorder />
      <PixelCardContent className={contentClassName}>
        {children}
      </PixelCardContent>
    </PixelCardWrapper>
  );
}

export default PixelCard;
