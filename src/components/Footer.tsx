import styled, { useTheme } from "styled-components";
import SVGIcon from "./SVGIcon";

const FooterRoot = styled.footer(({ theme }) => ({
  ...theme.typography.body2,
  position: `absolute`,
  bottom: 0,
  width: `100%`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  zIndex: theme.zIndex.footer,
  height: theme.spacing(theme.componentsGapFactor * 5),
}));

const Author = styled.span(({ theme }) => ({
  color: theme.palette.text.light,
  display: `inline-flex`,
  alignItems: `center`,
  gap: theme.spacing(4),
  alignSelf: `flex-end`,
  marginBottom: theme.spacing(theme.componentsGapFactor),
}));

function Footer() {
  const theme = useTheme();
  return (
    <FooterRoot>
      <Author>
        dreamed by DreamsWave{" "}
        <SVGIcon
          fill={theme.palette.icon.dark}
          iconName="copyright"
          size="smallest"
        />
        2024
      </Author>
    </FooterRoot>
  );
}

export default Footer;
