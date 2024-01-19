import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <h1>Spotlight art:</h1>
      <Image
        src={image}
        width={400}
        height={300}
        alt={`a picture by ${artist}`}
      ></Image>
    </>
  );
}
