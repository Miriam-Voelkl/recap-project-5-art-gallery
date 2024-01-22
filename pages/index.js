import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";
import Spotlight from "@/components/Spotlight";
// const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function SpotlightPage({ artData }) {
  // const {
  //   data: artData,
  //   isLoading,
  //   error,
  // } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  // if (isLoading) return <h1>...loading...</h1>;

  // if (error) return <h1>Data could not be loaded: {error.message}</h1>;
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
