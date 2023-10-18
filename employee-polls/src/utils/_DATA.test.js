import { _saveQuestion, _saveQuestionAnswer } from './_DATA';

describe('_saveQuestion', () => {
  it('should reject error when optionOne is null', async () => {
    const response = await _saveQuestion({
      optionOneText: null,
      optionTwoText: 'React',
      author: 'tylermcginnis',
    }).catch((e) => e);

    expect(response).toBe(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });

  it('should save the new question', async () => {
    const question = {
      author: 'sarahedo',
      optionOneText: 'React Udacity',
      optionTwoText: 'React Udemy',
    };

    const result = await _saveQuestion(question);

    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        optionOne: {
          votes: expect.any(Array),
          text: question.optionOneText,
        },
        optionTwo: {
          votes: expect.any(Array),
          text: question.optionTwoText,
        },
        author: question.author,
        timestamp: expect.any(Number),
      })
    );
  });
});

describe('_saveQuestionAnswer', () => {
  it('should return true for correct parameters', async () => {
    const response = await _saveQuestionAnswer({
      authedUser: 'tylermcginnis',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne',
    });

    expect(response).toBeTruthy();
  });

  it('should reject error when authed user not found', async () => {
    const response = await _saveQuestionAnswer({
      authedUser: undefined,
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne',
    }).catch((e) => e);

    expect(response).toBe('Please provide authedUser, qid, and answer');
  });
});
