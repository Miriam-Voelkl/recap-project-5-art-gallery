import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  display: block;
`;

const ImageContainer = styled.figure`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export default function ArtPiecePreview({ image, title, artist, dimensions }) {
  return (
    <>
      <ImageContainer>
        <StyledImage
          src={image}
          alt={title}
          height={dimensions.height / 10}
          width={dimensions.width / 10}
        ></StyledImage>
        <br />
        <figcaption>
          {`"${title}"`}, {artist}
        </figcaption>
      </ImageContainer>
    </>
  );
}
