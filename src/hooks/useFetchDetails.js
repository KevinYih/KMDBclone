import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDetails = (endpoint) => {
  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        //const response = await axios.get(endpoint);

        const response = await axios.get(`/tmdb/${endpoint}`);
        console.log("response:", response);

        setResponseData(response.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { responseData, loading };
};

export default useFetchDetails;
