import { combineReducers } from 'redux';
import { users } from './users';
import { questions } from './questions';
import { authedUser } from './authedUser';
import { loadingBarReducer } from 'react-redux-loading-bar';

export const reducers = combineReducers({
  users: users,
  questions: questions,
  authedUser: authedUser,
  loadingBar: loadingBarReducer,
});
