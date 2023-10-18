import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../utils/_DATA';
import { getUsers } from './users';
import { getQuestions, saveQuestion, saveQuestionAnswer } from './questions';
import { _saveQuestion } from '../utils/_DATA';
import { setAuthedUser } from './authedUser';

export const handleGetUsers = () => {
  return (dispatch) => {
    dispatch(showLoading());

    return _getUsers()
      .then((users) => dispatch(getUsers(users)))
      .then(() => dispatch(hideLoading()));
  };
};

export const handleGetQuestions = () => {
  return (dispatch) => {
    dispatch(showLoading());

    return _getQuestions()
      .then((questions) => dispatch(getQuestions(questions)))
      .then(() => dispatch(hideLoading()));
  };
};

export const handleSaveQuestionAnswer = (
  { questionId, authedUser, answer },
  callBack
) => {
  return (dispatch) => {
    return _saveQuestionAnswer({
      qid: questionId,
      authedUser: authedUser,
      answer: answer,
    })
      .then(() =>
        dispatch(
          saveQuestionAnswer({
            questionId,
            authedUser,
            answer,
          })
        )
      )
      .then(() =>
        callBack(`/questions/${questionId}`, {
          answer,
          authedUser,
          questionId,
        })
      );
  };
};

export const handleSaveQuestion = (
  { optionOneText, optionTwoText, author },
  callBack
) => {
  return (dispatch) => {
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    })
      .then((formattedQuestion) => dispatch(saveQuestion(formattedQuestion)))
      .then(() => callBack('/'));
  };
};

export const handleLogin = (userId) => {
  return (dispatch) => {
    dispatch(setAuthedUser(userId));
  };
};
