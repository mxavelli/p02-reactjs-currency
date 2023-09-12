import { NumericFormat } from 'react-number-format';

export const Input = ({ name, onChange, value }) => (
  <div className="mt-3.5 mb-5 flex flex-col">
    <label htmlFor={name}>{name}</label>
    <NumericFormat className="p-2 rounded-lg" value={value} onValueChange={onChange} thousandSeparator="," allowNegative={false} decimalScale={2} prefix="$" />
  </div>
);
