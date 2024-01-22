import Layout from "@/components/layout";
import useSWR from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: artData,
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState(artData);
  function handleFavoriteButton(slug) {
    setArtPiecesInfo(
      artPiecesInfo.map((Brokkoli) =>
        Brokkoli.slug !== slug
          ? Brokkoli
          : { ...Brokkoli, isFavorite: !Brokkoli.isFavorite }
      )
    );
  }

  if (isLoading) return <h1>...loading...</h1>;

  if (error) return <h1>Data could not be loaded: {error.message}</h1>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} artData={artData} />
      </Layout>
    </>
  );
}
