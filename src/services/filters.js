import client from './client';

const { REACT_APP_FILTERS_URL } = process.env;

export const getFilters = () => {
  return client.get(REACT_APP_FILTERS_URL);
};
