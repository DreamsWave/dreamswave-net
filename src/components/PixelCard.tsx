import styled from "styled-components";
import { PIXEL_SIZE } from "../constants";

export const PixelCardBorder = styled.div`
  position: absolute;
  background: rgba(199, 224, 229, 1);
  transition: background 0.3s linear;
`;

const TopBorder = styled(PixelCardBorder)`
  width: calc(100% - ${PIXEL_SIZE * 2}px);
  height: ${PIXEL_SIZE}px;
  top: 0;
  left: ${PIXEL_SIZE}px;
  background: linear-gradient(
    180deg,
    rgba(199, 224, 229, 1) 0%,
    rgba(199, 224, 229, 1) 100%
  );
`;

const BottomBorder = styled(PixelCardBorder)`
  width: calc(100% - ${PIXEL_SIZE * 2}px);
  height: ${PIXEL_SIZE}px;
  bottom: 0;
  left: ${PIXEL_SIZE}px;
  background: linear-gradient(
    180deg,
    rgba(215, 232, 234, 1) 0%,
    rgba(215, 232, 234, 1) 100%
  );
`;

const LeftBorder = styled(PixelCardBorder)`
  width: ${PIXEL_SIZE}px;
  height: calc(100% - ${PIXEL_SIZE * 2}px);
  top: ${PIXEL_SIZE}px;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(199, 224, 229, 1) 0%,
    rgba(215, 232, 234, 1) 100%
  );
`;

const RightBorder = styled(PixelCardBorder)`
  width: ${PIXEL_SIZE}px;
  height: calc(100% - ${PIXEL_SIZE * 2}px);
  top: ${PIXEL_SIZE}px;
  right: 0;
  background: linear-gradient(
    180deg,
    rgba(199, 224, 229, 1) 0%,
    rgba(215, 232, 234, 1) 100%
  );
`;

const PixelCardWrapper = styled.div`
  position: relative;
`;

export const PixelCardContent = styled.div`
  background: linear-gradient(
    180deg,
    rgba(199, 224, 229, 0.5) 0%,
    rgba(215, 232, 234, 0.5) 100%
  );
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: ${PIXEL_SIZE}px;
  position: relative;
  transition: all 0.3s;
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
  return (
    <PixelCardWrapper className={className}>
      <TopBorder />
      <BottomBorder />
      <LeftBorder />
      <RightBorder />
      <PixelCardContent className={contentClassName}>
        {children}
      </PixelCardContent>
    </PixelCardWrapper>
  );
}

export default PixelCard;
