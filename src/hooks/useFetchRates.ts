import { useState, useEffect } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetchFeeRate<T>(
  currency: string,
  cacheDuration = 24 * 60 * 60 * 1000
) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const url = `https://v6.exchangerate-api.com/v6/1129b5f740bf8dfa0e7422c7/pair/${currency}/INR/1`; // Hardcoded URL

  useEffect(() => {
    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });
      const cacheKey = `cache_${url}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        const { timestamp, data } = JSON.parse(cachedData);
        if (Date.now() - timestamp < cacheDuration) {
          setState({ data, loading: false, error: null });
          return;
        }
      }

      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ timestamp: Date.now(), data })
        );
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: (error as Error).message,
        });
      }
    };

    fetchData();
  }, [cacheDuration]);

  return state;
}
