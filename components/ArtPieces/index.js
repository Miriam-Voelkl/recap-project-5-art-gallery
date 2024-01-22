import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
`;

export default function ArtPieces({ artData }) {
  return (
    <>
      <StyledList>
        {artData.map((artPiece) => (
          <li key={artPiece.slug}>
            <ArtPiecePreview
              image={artPiece.imageSource}
              title={artPiece.name}
              artist={artPiece.artist}
              dimensions={artPiece.dimensions}
              slug={artPiece.slug}
            ></ArtPiecePreview>
          </li>
        ))}
      </StyledList>
    </>
  );
}
