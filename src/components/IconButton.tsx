import styled from "styled-components";
import PixelCard, { PixelCardBorder, PixelCardContent } from "./PixelCard";
import theme from "../themes/light";

const IconButtonRoot = styled.button(({ theme }) => ({
  color: theme.palette.text.main,
  background: `transparent`,
  cursor: `pointer`,
  outline: `none`,
  border: `none`,
  borderRadius: 0,
  padding: 0,
  height: "fit-content",
  width: "fit-content",

  "&:focus:not(:focus-visible)": {
    outline: `none`,
  },

  "&:focus-visible": {
    outline: "none",
    [`${PixelCardBorder}`]: {
      background: theme.action.focus,
    },
  },
}));

const StyledPixelCard = styled(PixelCard)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",

  [`${PixelCardContent}`]: {
    padding: theme.spacing(2),
  },
}));

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
const IconButton = ({ children, className, ...rest }: IconButtonProps) => {
  return (
    <IconButtonRoot {...rest} className={className}>
      <StyledPixelCard>{children}</StyledPixelCard>
    </IconButtonRoot>
  );
};

export default IconButton;
