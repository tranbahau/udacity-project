export const authedUser = (state = null, action) => {
  switch (action.type) {
    case 'LOG_OUT':
      return null;
    case 'SET_AUTHED_USER_ID':
      return action.userId;
    default:
      return state;
  }
};
