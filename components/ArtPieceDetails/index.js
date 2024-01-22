import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid black;
  padding: 2px;
  border-radius: 5px;
  margin: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledList = styled.ul`
  margin-bottom: 5px;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  dimensions,
}) {
  return (
    <>
      <h1>Details</h1>
      <Image
        src={image}
        height={dimensions.height / 5}
        width={dimensions.width / 5}
        alt={title}
      ></Image>
      <StyledList>
        <li> {title}</li>
        <li> {artist}</li>
        <li> {year}</li>
        <li> {genre}</li>
      </StyledList>
      <StyledLink href="/art-pieces">Back to gallery</StyledLink>
    </>
  );
}
