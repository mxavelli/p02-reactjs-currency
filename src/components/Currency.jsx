import React from 'react';
import Select from 'react-select';
import { urls } from './constants';
import './Currency.css';
import { useFetchApi, STATUS } from '../hooks/useFetchApi';

export const Currency = () => {
  const { fetchUrl, dataFetched, status } = useFetchApi(
    {
      url: 'https://pydolarlibre.francis.center/api/v1/argcurrency/json',
      shouldLoadOnMount: true,
    },
  );

  const handleSelectChange = (value) => {
    fetchUrl(value.value);
  };

  return (
    <div className="Currency-container">
      <Select
        defaultValue={{ label: 'ARG', value: 'https://pydolarlibre.francis.center/api/v1/argcurrency/json' }}
        options={urls}
        onChange={handleSelectChange}
      />
      {status === STATUS.LOADING && <p>Loading</p>}
      {dataFetched !== null && (
      <div className="Currencies">
        <p>
          BUY:
          {dataFetched.Compra}
          $
        </p>
        <p>
          SELL:
          {dataFetched.Venta}
          $
        </p>
      </div>
      )}
    </div>
  );
};
