import { NONE, DATE_FILTER } from '../utils/constants/constants';

export const parseAuthParams = () => {
  const params = new URLSearchParams(window.location.hash);

  return {
    accessToken: params.get('#access_token'),
    tokenType: params.get('token_type'),
    expiresIn: params.get('expires_in'),
  };
};

export const validAuth = (auth) => {
  return Object.values(auth).some((authValue) => authValue != null);
};

export const formatTimeStamp = (date) => {
  const today = new Date(date);

  return today.toISOString();
};

export const todayDate = () => {
  return new Date().toISOString().slice(0, 10);
};

export const filterParams = (activeFilters) => {
  const params = {};

  Object.keys(activeFilters).forEach((filter) => {
    const filterOption = activeFilters[filter];

    if (filterOption && filterOption !== NONE) {
      params[filter] =
        filter === DATE_FILTER ? formatTimeStamp(filterOption) : filterOption;
    }
  });

  return params;
};
