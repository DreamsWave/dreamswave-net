import styled from "styled-components";

const Copyright = styled.span(({ theme }) => ({
  ...theme.typography.body2,
  position: `absolute`,
  right: `10px`,
  bottom: `10px`,
  zIndex: theme.zIndex.mainContent,
  color: theme.palette.text.secondary,
}));

export default Copyright;
