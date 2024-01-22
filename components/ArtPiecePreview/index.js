import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.figure`
  width: 450px;
  height: 450px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  background-color: black;
  color: white;
  width: 450px;
  line-height: 2rem;
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
              width={dimensions.width}
              height={450}
            ></StyledImage>
          </Link>
        </ImageContainer>
        <Paragraph>
          {`"${title}"`}, {artist}
        </Paragraph>
      </Wrapper>
    </>
  );
}
