
import Spotlight from "@/components/Spotlight";


export default function SpotlightPage({ artData }) {
 
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomArtPiece = getRandomElement(artData);

  return (
    <Spotlight
      image={randomArtPiece.imageSource}
      artist={randomArtPiece.artist}
      dimensions={randomArtPiece.dimensions}
    ></Spotlight>
  );
}
