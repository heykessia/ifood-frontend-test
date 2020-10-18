import axios from 'axios';

const { REACT_APP_FILTERS_URL } = process.env;

export const getFilters = () => {
  return axios.get(REACT_APP_FILTERS_URL);
};
