import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(endpoint);
        setResponseData(response.data.results);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { responseData, loading };
};

export default useFetch;
