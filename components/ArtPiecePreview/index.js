import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyledImage = styled(Image)`
  display: block;
`;

const ImageContainer = styled.figure`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  dimensions,
  slug,
}) {
  console.log(image);
  return (
    <>
      <ImageContainer>
        <Link href={`/art-pieces/${slug}`}>
          <StyledImage
            src={image}
            alt={title}
            height={dimensions.height / 10}
            width={dimensions.width / 10}
          ></StyledImage>
        </Link>
        <figcaption>
          {`"${title}"`}, {artist}
        </figcaption>
      </ImageContainer>
    </>
  );
}
