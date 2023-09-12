export const formatearCantidad = (cantidad) => new Intl.NumberFormat(
  'en-US',
  { currency: 'USD', style: 'currency' },
).format(cantidad);
