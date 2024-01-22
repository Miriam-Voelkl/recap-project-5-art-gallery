import Image from "next/image";

export default function Spotlight({ image, artist, dimensions }) {
  return (
    <>
      <h1>Spotlight artist:</h1>
      <p>{artist}</p>
      <Image
        src={image}
        width={dimensions.width / 10}
        height={dimensions.height / 10}
        alt={`a picture by ${artist}`}
      ></Image>
    </>
  );
}
