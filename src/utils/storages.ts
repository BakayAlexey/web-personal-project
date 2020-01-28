export const setToLocalStorage = (key: string, data: string) => {
  window.localStorage.setItem(key, data);
};

export const getFromLocalStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  return window.localStorage.removeItem(key);
};
