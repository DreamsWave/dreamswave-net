import styled from "styled-components";

const Link = styled.a``;

const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

type ButtonProps = {
  children: React.ReactNode;
  link?: string;
  onNewPage?: boolean;
};
function Button({ children, link = "", onNewPage = false }: ButtonProps) {
  return (
    <Link href={link} target={onNewPage ? "_blank" : "_self"}>
      <ButtonStyled>{children}</ButtonStyled>
    </Link>
  );
}

export default Button;
