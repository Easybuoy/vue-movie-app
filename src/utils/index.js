export const formatItemToString = array => {
  const arrayValues = array.map(item => {
    return item.name;
  });
  console.log('as', arrayValues.join(', '));
  const response = arrayValues.join(', ');
  return response;
};

export const convertTime = time => {
  const minutes = time % 60;
  const hours = (time - minutes) / 60;

  return `${hours}h ${minutes}m`;
};

export const currencyConverter = currency => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(currency);
};
