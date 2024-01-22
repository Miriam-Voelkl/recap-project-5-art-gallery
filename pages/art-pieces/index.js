import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

const StyledHeadline = styled.h1`
  text-align: center;
`;

export default function GalleryPage({ artData }) {
  return (
    <>
      <StyledHeadline>Art Gallery</StyledHeadline>
      <ArtPieces artData={artData} />
    </>
  );
}
