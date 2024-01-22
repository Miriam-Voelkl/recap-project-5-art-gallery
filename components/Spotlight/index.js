import Image from "next/image";


export default function Spotlight({ image, artist, dimensions }) {
  return (
    <>
      <h1>Spotlight artist:</h1>
      <p>{artist}</p>
      <Image
        src={image}
        width={dimensions.width / 5}
        height={dimensions.height / 5}
        alt={`a picture by ${artist}`}
      ></Image>
    </>
  );
}
