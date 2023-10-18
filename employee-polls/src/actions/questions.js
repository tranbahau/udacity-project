const GET_QUESTIONS = 'GET_QUESTIONS';
const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
const SAVE_QUESTION = 'SAVE_QUESTION';

export const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const saveQuestionAnswer = (answerInfo) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    answerInfo,
  };
};

export const saveQuestion = (question) => {
  return {
    type: SAVE_QUESTION,
    question,
  };
};
