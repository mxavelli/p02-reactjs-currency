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
  useLocalStorageFirst = false,
}) => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [dataFetched, setDataFetched] = useState(useLocalStorageFirst
    ? JSON.parse(localStorage.getItem(url))
    : null);

  const fetchUrl = (urlToFetch = url) => {
    setStatus(STATUS.LOADING);
    axios.get(urlToFetch)
      .then(({ data }) => {
        // eslint-disable-next-line no-param-reassign
        data.savedOn = new Date().toISOString();
        setStatus(STATUS.SUCCESS);
        setDataFetched(data);
        localStorage.setItem(url, JSON.stringify(data));
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
