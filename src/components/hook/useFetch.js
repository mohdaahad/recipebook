import { useState, useEffect } from "react";

export const useFetch = (url, dependency = "") => {
  const [reqData, setReqData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const getData = async (url) => {
    setLoading(true);

    const res = await fetch(url);
    const data = await res.json();

    if (data.code === 402) {
      console.log(data.message);
      setApiError(true);
    }

    setReqData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData(url);
    console.log(dependency + " changed");
  }, [dependency]);

  return {
    reqData,
    isLoading,
    apiError,
  };
};
