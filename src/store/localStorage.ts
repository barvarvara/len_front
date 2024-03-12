export const saveRefreshTokenToLocalStorage = (value: string | null) => {
  if (value)
    localStorage.setItem('refresh_token', value);
};

export const getRefreshTokenFromLocalStorage = () => {
  return localStorage.getItem('refresh_token');
};

export const deleteRefreshTokenFromLocalStorage = () => {
  localStorage.removeItem('refresh_token');
};


export const setIsAuthInLocalStorage = (value: boolean | null) => {
  if (value)
    localStorage.setItem('isAuth', String(value));
};

export const getIsAuthFromLocalStorage = () => {
  return localStorage.getItem('isAuth');
};


