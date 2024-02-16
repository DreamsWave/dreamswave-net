import styled, { useTheme } from "styled-components";
import { PIXEL_SIZE } from "../constants";
import { Theme } from "../types";

export const PixelCardBorder = styled.div<{ $color: string }>`
  position: absolute;
  background: ${({ $color }) => $color};
  transition: background 0.3s linear;
  z-index: ${({ theme }) => theme.zIndex.pixelCardBorder};
`;

const TopBorder = styled(PixelCardBorder)<{
  $gradientFrom: string;
  $gradientTo: string;
}>`
  width: calc(100% - ${PIXEL_SIZE * 2}px);
  height: ${PIXEL_SIZE}px;
  top: 0;
  left: ${PIXEL_SIZE}px;
  background: linear-gradient(
    180deg,
    ${({ $gradientFrom }) => $gradientFrom} 0%,
    ${({ $gradientFrom }) => $gradientFrom} 100%
  );
`;

const BottomBorder = styled(PixelCardBorder)<{
  $gradientFrom: string;
  $gradientTo: string;
}>`
  width: calc(100% - ${PIXEL_SIZE * 2}px);
  height: ${PIXEL_SIZE}px;
  bottom: 0;
  left: ${PIXEL_SIZE}px;
  background: linear-gradient(
    180deg,
    ${({ $gradientTo }) => $gradientTo} 0%,
    ${({ $gradientTo }) => $gradientTo} 100%
  );
`;

const LeftBorder = styled(PixelCardBorder)<{
  $gradientFrom: string;
  $gradientTo: string;
}>`
  width: ${PIXEL_SIZE}px;
  height: calc(100% - ${PIXEL_SIZE * 2}px);
  top: ${PIXEL_SIZE}px;
  left: 0;
  background: linear-gradient(
    180deg,
    ${({ $gradientFrom }) => $gradientFrom} 0%,
    ${({ $gradientTo }) => $gradientTo} 100%
  );
`;

const RightBorder = styled(PixelCardBorder)<{
  $gradientFrom: string;
  $gradientTo: string;
}>`
  width: ${PIXEL_SIZE}px;
  height: calc(100% - ${PIXEL_SIZE * 2}px);
  top: ${PIXEL_SIZE}px;
  right: 0;
  background: linear-gradient(
    180deg,
    ${({ $gradientFrom }) => $gradientFrom} 0%,
    ${({ $gradientTo }) => $gradientTo} 100%
  );
`;

const PixelCardWrapper = styled.div`
  position: relative;
`;

export const PixelCardContent = styled.div<{
  $gradientFrom: string;
  $gradientTo: string;
}>`
  background: linear-gradient(
    180deg,
    ${({ $gradientFrom }) => $gradientFrom} 0%,
    ${({ $gradientTo }) => $gradientTo} 100%
  );
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: ${PIXEL_SIZE}px;
  position: relative;
  transition: all 0.3s;
  z-index: ${({ theme }) => theme.zIndex.pixelCardContent};
`;

function PixelCard({
  children,
  className,
  contentClassName,
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  const theme: Theme = useTheme();

  return (
    <PixelCardWrapper className={className}>
      <TopBorder
        $color={theme.palette.border.color}
        $gradientFrom={theme.palette.border.gradient.from}
        $gradientTo={theme.palette.border.gradient.to}
      />
      <RightBorder
        $color={theme.palette.border.color}
        $gradientFrom={theme.palette.border.gradient.from}
        $gradientTo={theme.palette.border.gradient.to}
      />
      <BottomBorder
        $color={theme.palette.border.color}
        $gradientFrom={theme.palette.border.gradient.from}
        $gradientTo={theme.palette.border.gradient.to}
      />
      <LeftBorder
        $color={theme.palette.border.color}
        $gradientFrom={theme.palette.border.gradient.from}
        $gradientTo={theme.palette.border.gradient.to}
      />

      <PixelCardContent
        className={contentClassName}
        $gradientFrom={theme.palette.gradient.from}
        $gradientTo={theme.palette.gradient.to}
      >
        {children}
      </PixelCardContent>
    </PixelCardWrapper>
  );
}

export default PixelCard;
