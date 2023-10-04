export const setTimeOutForLoader = setIsLoading => {
  setIsLoading(true);
  let timerId = null;
  timerId = setTimeout(() => {
    setIsLoading(false);
    clearTimeout(timerId);
  }, 1000);
};
