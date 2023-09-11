import { formatearCantidadSoloNumeros } from '../utils.js';

export const Input = ({ name, onChange, value }) => (
  <div className="mt-3.5 mb-5 flex flex-col">
    <label htmlFor={name}>{name}</label>
    <input type="text" name={name} onChange={onChange} placeholder={`Type ${name} here`} value={formatearCantidadSoloNumeros(value)} className="p-2 rounded-lg" />
  </div>
);
