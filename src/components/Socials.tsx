import styled from "styled-components";
import SocialList from "./SocialList";
import About from "./About";

const SocialRoot = styled.div(({ theme }) => ({
  display: `flex`,
  alignItems: `flex-start`,
  flexWrap: `wrap`,
  width: `100%`,
  position: `relative`,
  alignContent: `flex-start`,
  justifyContent: `center`,
  gap: theme.spacing(theme.componentsGapFactor),
  padding: `0 ${theme.spacing(theme.componentsGapFactor)}`,
  minWidth: `${theme.breakpoints.min}px`,
  maxWidth: `${theme.breakpoints.max}px`,
  margin: `0 auto`,

  [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
    gap: theme.spacing(theme.componentsGapFactor - 2),
    padding: `0 ${theme.spacing(theme.componentsGapFactor - 2)}`,
  },
}));

function Socials() {
  return (
    <SocialRoot>
      <About />
      <SocialList />
    </SocialRoot>
  );
}

export default Socials;
