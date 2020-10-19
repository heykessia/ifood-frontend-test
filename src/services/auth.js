export const TOKEN = 'spotify-auth';
export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null;
export const getToken = () => JSON.parse(localStorage.getItem(TOKEN));
export const login = (token) =>
  localStorage.setItem(TOKEN, JSON.stringify(token));
export const logout = () => {
  localStorage.removeItem(TOKEN);
};
