import Navigation from "../navigation";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <StyledFooter>
        <Navigation />
      </StyledFooter>
    </>
  );
}
