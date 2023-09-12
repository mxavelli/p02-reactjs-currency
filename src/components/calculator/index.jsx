import { useEffect, useState } from 'react';
import { useFetchApi } from '../../hooks/useFetchApi.js';
import { urlMap } from '../constants.js';
import { Input } from './Input.jsx';

const usdCurrency = {
  id: 'USD',
  Compra: 1,
  Venta: 1,
  value: 1,
};

export const Calculator = () => {
  const { dataFetched, status } = useFetchApi({
    url: urlMap.ALL.endpoint, shouldLoadOnMount: true, useLocalStorageFirst: true,
  });

  const [currencies, setCurrencies] = useState([]);

  const onValueChange = (id) => ({ floatValue: value }, { source }) => {
    if (source === 'prop') return;
    const valueCompraOfCurrency = currencies.find((i) => i.id === id).Compra;
    const valueIntroduced = Number(value) ?? 1;
    const usd = valueIntroduced / valueCompraOfCurrency;
    setCurrencies((old) => old.map((cur) => ({
      ...cur,
      value: cur.id === id ? valueIntroduced : usd * cur.Compra,
    })));
  };

  useEffect(() => {
    if (dataFetched) {
      const newCurrencies = Object.keys(dataFetched)
        .filter((i) => i !== 'savedOn')
        .map((i) => ({ id: i, ...dataFetched[i].json, value: dataFetched[i].json.Compra }));
      newCurrencies.unshift(usdCurrency);
      setCurrencies(newCurrencies);
    }
  }, [dataFetched]);

  if (dataFetched === null && status === 'LOADING') {
    return <p>Loading...</p>;
  }
  return dataFetched && (
  <div id="calculator">
    <strong>
      Last updated:
      {` ${new Date(dataFetched.savedOn).toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
      })}`}
    </strong>
    {currencies.length > 0 && currencies.map(({ id, value }) => (
      <Input name={id} key={id} onChange={onValueChange(id)} value={value} />
    ))}
  </div>
  );
};
