const SET_AUTHED_USER_ID = 'SET_AUTHED_USER_ID';

const LOG_OUT = 'LOG_OUT';

export const setAuthedUser = (userId) => {
  return {
    type: SET_AUTHED_USER_ID,
    userId,
  };
};

export const setUserLogOut = () => {
  return {
    type: LOG_OUT,
  };
};
