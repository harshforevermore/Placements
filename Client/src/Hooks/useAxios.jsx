import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      withCredentials: true,
    },
  });

  const fetchData = useCallback(
    async ({ url, method = "GET", data: bodyData, headers = {} } = {}) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance({
          url: url,
          method: method,
          data: bodyData,
          headers: { ...headers },
        });
        setData(response.data);
        return response;
      } catch (err) {
        console.log(err);
        setError(
          err.response?.data?.message || err.message || "An error occurred"
        );
        throw err.response?.data;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, loading, error, fetchData };
};

export default useAxios;


// export default useAxios;