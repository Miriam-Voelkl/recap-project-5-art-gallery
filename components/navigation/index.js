import Link from "next/link";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 25px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <nav>
      <StyledUl>
        <li>
          <StyledLink href="/">Spotlight</StyledLink>
        </li>
        <li>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </li>
      </StyledUl>
    </nav>
  );
}
