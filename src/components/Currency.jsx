import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { urls } from './constants';
import './Currency.css';

export function Currency() {
  const [currencies, setCurrencies] = useState([]);
  const getCurrency = (value = 'https://pydolarlibre.francis.center/api/v1/argcurrency/json') => {
    axios
      .get(value)
      .then((response) => setCurrencies(response.data));
  };

  useEffect(() => {
    getCurrency();
  }, []);

  const handleSelectChange = (value) => {
    getCurrency(value.value);
  };

  return (
    <div className="Currency-container">
      <Select
        defaultValue={{ label: 'ARG', value: 'https://pydolarlibre.francis.center/api/v1/argcurrency/json' }}
        options={urls}
        onChange={handleSelectChange}
      />
      <div className="Currencies">
        <p>
          BUY:
          {currencies.Compra}
          $
        </p>
        <p>
          SELL:
          {currencies.Venta}
          $
        </p>
      </div>
    </div>
  );
}
