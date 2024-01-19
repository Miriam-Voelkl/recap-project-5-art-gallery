import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";
import Spotlight from "../Spotlight";

const StyledList = styled.ul`
  list-style: none;
`;

export default function ArtPieces({ artData }) {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomArtPiece = getRandomElement(artData);

  return (
    <>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      ></Spotlight>
      <StyledList>
        {artData.map((artPiece) => (
          <li key={artPiece.slug}>
            <ArtPiecePreview
              image={artPiece.imageSource}
              title={artPiece.name}
              artist={artPiece.artist}
              dimensions={artPiece.dimensions}
            ></ArtPiecePreview>
          </li>
        ))}
      </StyledList>
    </>
  );
}
