export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(action);
  console.groupEnd();
  next(action);
};
