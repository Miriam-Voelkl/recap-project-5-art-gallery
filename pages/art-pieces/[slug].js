import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailPage({ artData }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = artData.find((artPiece) => artPiece.slug === slug);
  console.log(currentArtPiece);
  return (
    <ArtPieceDetails
      image={currentArtPiece.imageSource}
      title={currentArtPiece.name}
      artist={currentArtPiece.artist}
      year={currentArtPiece.year}
      genre={currentArtPiece.genre}
      dimensions={currentArtPiece.dimensions}
    ></ArtPieceDetails>
  );
}
