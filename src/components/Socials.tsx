import styled from "styled-components";
import SocialList from "./SocialList";
import About from "./About";

const SocialsWrapper = styled.div(({ theme }) => ({
  display: `flex`,
  alignItems: `flex-start`,
  flexWrap: `wrap`,
  width: `100%`,
  position: `relative`,
  alignContent: `flex-start`,
  justifyContent: `center`,
  gap: theme.spacing(4),
  padding: `${theme.spacing(20)} ${theme.spacing(4)}`,
  minWidth: `360px`,
  maxWidth: `1200px`,
  margin: `0 auto`,

  [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
    padding: `${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(10)}`,
  },
}));

function Socials() {
  return (
    <SocialsWrapper>
      <About />
      <SocialList />
    </SocialsWrapper>
  );
}

export default Socials;
