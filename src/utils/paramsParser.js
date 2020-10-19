import { NONE, DATE_FILTER } from '../utils/constants/constants';

export const parseAuthParams = () => {
  const params = new URLSearchParams(window.location.hash);
  const expireDate = formatExpireDate(params.get('expires_in'));

  return {
    accessToken: params.get('#access_token'),
    tokenType: params.get('token_type'),
    expiresIn: expireDate,
  };
};

export const validAuth = (auth) => {
  const hasAuthParams =
    auth && Object.values(auth).some((authValue) => authValue != null);

  return hasAuthParams && !isExpired(auth.expiresIn);
};

export const formatTimeStamp = (date) => {
  const today = new Date(date);

  return today.toISOString();
};

export const todayDate = () => {
  return new Date().toISOString().slice(0, 10);
};

export const formatExpireDate = (date) => {
  if (!parseInt(date)) return '';

  const expireDate = parseInt(date) * 1000;
  const now = new Date().getTime();
  return new Date(now + expireDate);
};

export const isExpired = (date) => {
  return new Date() > date;
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
