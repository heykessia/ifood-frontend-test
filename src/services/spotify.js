import axios from 'axios';

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_AUTH_URL,
  REACT_APP_REDIRECT_URL,
  REACT_APP_FEATURED_URL,
} = process.env;

export const loginURL = () => {
  return `${REACT_APP_AUTH_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
};

export const getPlaylists = (auth) => {
  const header = { Authorization: `${auth.tokenType} ${auth.accessToken}` };

  return axios.get(REACT_APP_FEATURED_URL, {
    headers: header,
  });
};
