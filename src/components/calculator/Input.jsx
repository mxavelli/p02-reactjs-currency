import { NumericFormat } from 'react-number-format';

export const Input = ({ name, onChange, value }) => {

  const normalized = value == null ? '' : String(value); 

  return (
    <div className="mt-3.5 mb-5 flex flex-col">
      <label htmlFor={name} className="font-bold ml-1 mb-0.5">{name}</label>

      <NumericFormat
        id={name}
        name={name}
        className="p-2 rounded-lg"
        value={normalized}
        valueIsNumericString
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={4}
        allowNegative={false}
        inputMode="decimal"
        onValueChange={(values, sourceInfo) => {
          onChange?.(values, sourceInfo);
        }}
        onFocus={(e) => {
          onChange?.(
            { formattedValue: '', value: '', floatValue: null },
            { event: e, source: 'event' }
          );
        }}
      />
    </div>
  );
};
