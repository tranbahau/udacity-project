export const users = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, ...action.users };
    case 'SAVE_QUESTION_ANSWER':
      return {
        ...state,
        [action.answerInfo.authedUser]: {
          ...state[action.answerInfo.authedUser],
          answers: {
            ...state[action.answerInfo.authedUser].answers,
            [action.answerInfo.questionId]: action.answerInfo.answer,
          },
        },
      };
    case 'SAVE_QUESTION':
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat(
            action.question.id
          ),
        },
      };
    default:
      return state;
  }
};
