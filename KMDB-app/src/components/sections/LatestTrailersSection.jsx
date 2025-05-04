import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import MovieList from "../MovieList";

///trending/all/${timeWindow}

const endpointMap = {
  Popular: "/movie/now_playing",
  Streaming: "/trending/movie/day",
  "On TV": "/tv/airing_today",
  "For Rent": "/movie/popular",
  "In Theatres": "/tv/airing_today",
};

const LatestTrailersSection = () => {
  const [selected, setSelected] = useState("Popular");
  const endpoint = endpointMap[selected];
  const { responseData, loading } = useFetch(endpoint);

  const options = Object.keys(endpointMap);

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "0.5rem" }}>
        Latest Trailers
        <span style={{ marginLeft: "1rem" }}>
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              style={{
                padding: "0.3rem 0.8rem",
                marginRight: "0.5rem",
                borderRadius: "20px",
                backgroundColor: selected === opt ? "#00ffc7" : "transparent",
                color: selected === opt ? "#000" : "#fff",
                border: "1px solid #00ffc7",
                fontWeight: selected === opt ? "bold" : "normal",
              }}>
              {opt}
            </button>
          ))}
        </span>
      </h2>
      {loading ? <p>Loading...</p> : <MovieList items={responseData} />}
    </div>
  );
};

export default LatestTrailersSection;
