import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const {
    data: artData,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading) return <h1>...loading...</h1>;

  if (error) return <h1>Data could not be loaded: {error.message}</h1>;

  return <ArtPieces artData={artData}></ArtPieces>;
}
