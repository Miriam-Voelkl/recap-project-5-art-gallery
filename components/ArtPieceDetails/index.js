import Image from "next/image";
import Link from "next/link";

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
      <Image
        src={image}
        height={dimensions.height / 10}
        width={dimensions.width / 10}
        alt={title}
      ></Image>
      <ul>
        <li> {title}</li>
        <li> {artist}</li>
        <li> {year}</li>
        <li> {genre}</li>
      </ul>
      <Link href="/art-pieces">Back to gallery</Link>
    </>
  );
}
