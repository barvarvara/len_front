export const saveAccessTokenToLocalStorage = (value: string | null) => {
  if (value)
    localStorage.setItem('access_token', value);
};

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('access_token');
};

export const deleteAccessTokenFromLocalStorage = () => {
  localStorage.removeItem('access_token');
};

