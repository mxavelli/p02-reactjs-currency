import { NumericFormat } from 'react-number-format';

export const Input = ({ name, onChange, value }) => (
  <div className="mt-3.5 mb-5 flex flex-col">
    <label htmlFor={name} className="font-bold ml-1 mb-0.5">{name}</label>
    <NumericFormat
      className="p-2 rounded-lg"
      type="number"
      pattern="\d*"
      value={value}
      onValueChange={(values, sourceInfo) => {
        onChange(values, sourceInfo);
      }}
      thousandSeparator=","
      allowNegative={false}
      decimalScale={2}
      onFocus={() => {
        onChange({ formattedValue: '', value: '', floatValue: null }, { source: 'event' });
      }}
    />
  </div>
);
