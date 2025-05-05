import React from "react";
import HeroDetail from "../components/sections/HeroDetail";
import { useParams } from "react-router";
import useFetchDetails from "../hooks/useFetchDetails";

const MovieDetailPage = () => {
  const { mediaType, id } = useParams();

  const { responseData: data, loading: movieLoading } = useFetchDetails(`/${mediaType}/${id}`);
  const { responseData: castData, loading: creditLoading } = useFetchDetails(`/${mediaType}/${id}/credits`);
  console.log("castData:", castData);

  // <HeroDetail data={data.data} loading={movieLoading} castData={castData} creditLoading={creditLoading} />

  return (
    <div>
      <HeroDetail data={data} loading={movieLoading} castData={castData} creditLoading={creditLoading} />
    </div>
  );
};

export default MovieDetailPage;
