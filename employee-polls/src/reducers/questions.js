export const questions = (state = {}, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return { ...state, ...action.questions };
    case 'SAVE_QUESTION_ANSWER':
      return {
        ...state,
        [action.answerInfo.questionId]: {
          ...state[action.answerInfo.questionId],
          [action.answerInfo.answer]: {
            ...state[action.answerInfo.questionId][action.answerInfo.answer],
            votes: state[action.answerInfo.questionId][
              action.answerInfo.answer
            ].votes.concat(action.answerInfo.authedUser),
          },
        },
      };
    case 'SAVE_QUESTION':
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
};
