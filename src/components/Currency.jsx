import React from 'react';
import Select from 'react-select';
import { urls } from './constants';
import { useFetchApi, STATUS } from '../hooks/useFetchApi';
import { formatearCantidad } from './utils.js';

export const Currency = () => {
  const { fetchUrl, dataFetched, status } = useFetchApi(
    {
      url: 'https://pydolarlibre.francis.center/api/v1/ARG/json',
      shouldLoadOnMount: true,
      useLocalStorageFirst: true,
    },
  );

  const handleSelectChange = (value) => {
    fetchUrl(value.value);
  };

  return (
    <div className="basis-full m-20 md:w-2/3 mx-auto">
      <Select
        defaultValue={{ label: 'Argentina', value: 'https://pydolarlibre.francis.center/api/v1/ARG/json' }}
        options={urls}
        onChange={handleSelectChange}
        className="text-2xl font-medium text-green-700"
      />
      {status === STATUS.LOADING && <p className="text-green-700 text-3xl font-black">Loading</p>}
      {dataFetched !== null && (
      <div className="font-black text-3xl m-20 md:w-2/3 mx-auto">
        <p className="text-center m-20 font-black text-green-800">
          BUY:
          {' '}
          {'  '}
          {formatearCantidad(dataFetched.Compra)}
        </p>
        <p className="text-center m-20 font-black text-green-800">
          SELL:
          {' '}
          {'  '}
          {formatearCantidad(dataFetched.Venta)}
        </p>
      </div>
      )}
    </div>
  );
};
