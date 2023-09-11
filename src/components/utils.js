export const formatearCantidad = (cantidad) => new Intl.NumberFormat(
  'en-US',
  { currency: 'USD', style: 'currency' },
).format(cantidad);

export const formatearCantidadSoloNumeros = (cantidad) => new Intl.NumberFormat(
  'en-US',
  { currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 },
).format(cantidad);
