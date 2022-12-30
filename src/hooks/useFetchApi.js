import { useEffect, useState } from 'react';
import axios from 'axios';

export const STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const useFetchApi = ({
  url,
  shouldLoadOnMount = false,
}) => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [dataFetched, setDataFetched] = useState(null);

  const fetchUrl = (urlToFetch = url) => {
    setStatus(STATUS.LOADING);
    axios.get(urlToFetch)
      .then(({ data }) => {
        setStatus(STATUS.SUCCESS);
        setDataFetched(data);
      })
      .catch(() => {
        setStatus(STATUS.ERROR);
      });
  };

  useEffect(() => {
    if (shouldLoadOnMount) fetchUrl();
  }, []);

  return {
    fetchUrl,
    status,
    dataFetched,
  };
};
