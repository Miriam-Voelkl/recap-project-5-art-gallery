import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  width: 100%;
`;

const ImageContainer = styled.figure`
  width: 450px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  background-color: black;
  color: white;
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
      <Wrapper>
        <ImageContainer>
          <Link href={`/art-pieces/${slug}`}>
            <StyledImage
              src={image}
              alt={title}
              height={dimensions.height / 5}
              width={dimensions.width / 5}
            ></StyledImage>
          </Link>
          <Paragraph>
            {`"${title}"`}, {artist}
          </Paragraph>
        </ImageContainer>
      </Wrapper>
    </>
  );
}
