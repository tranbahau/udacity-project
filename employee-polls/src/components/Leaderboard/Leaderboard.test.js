import { formatUsers } from './Leaderboard';

describe('Leaderboard page formatUsers()', () => {
  it('should return formatted users correctly', () => {
    const users = {
      John: {
        id: 'John',
        password: 'password123',
        name: 'John Doe',
        avatarURL:
          'https://www.shareicon.net/data/128x128/2016/09/15/829446_user_512x512.png',
        answers: {
          answeredQuestion1: 'optionOne',
          answeredQuestion2: 'optionOne',
        },
        questions: ['question1', 'question2'],
      },
    };

    const formatedUsers = formatUsers(users);

    expect(formatedUsers.length).toBeGreaterThan(0);
    expect(formatedUsers).toContainEqual(
      expect.objectContaining({
        id: 'John',
        name: 'John Doe',
        avatarURL:
          'https://www.shareicon.net/data/128x128/2016/09/15/829446_user_512x512.png',
        answered: 2,
        asked: 2,
        total: 4,
      })
    );
  });

  it('should return empty array when users is null', () => {
    const users = null;
    const formatedUsers = formatUsers(users);

    expect(formatedUsers).toEqual([]);
  });
});
