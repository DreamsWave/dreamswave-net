import styled from "styled-components";

const pixelSize = 5;

const Border = styled.div`
  position: absolute;
  background-color: rgb(199, 224, 229);
`;

const TopBorder = styled(Border)`
  width: calc(100% - ${pixelSize * 2}px);
  height: ${pixelSize}px;
  top: 0;
  left: ${pixelSize}px;
  background: rgba(199, 224, 229, 1);
`;

const BottomBorder = styled(Border)`
  width: calc(100% - ${pixelSize * 2}px);
  height: ${pixelSize}px;
  bottom: 0;
  left: ${pixelSize}px;
  background: rgba(215, 232, 234, 1);
`;

const LeftBorder = styled(Border)`
  width: ${pixelSize}px;
  height: calc(100% - ${pixelSize * 2}px);
  top: ${pixelSize}px;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(199, 224, 229, 1) 0%,
    rgba(215, 232, 234, 1) 100%
  );
`;

const RightBorder = styled(Border)`
  width: ${pixelSize}px;
  height: calc(100% - ${pixelSize * 2}px);
  top: ${pixelSize}px;
  right: 0;
  background: linear-gradient(
    180deg,
    rgba(199, 224, 229, 1) 0%,
    rgba(215, 232, 234, 1) 100%
  );
`;

const PixelCardWrapper = styled.div`
  position: relative;
  // width: 100%;
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
  margin: ${pixelSize}px;
  position: relative;
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
