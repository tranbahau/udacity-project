import { Fragment } from 'react';
import UserInformation from './UserInformation/UserInformation';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const users = useSelector((state) => state.users);
  const formattedUsers = formatUsers(users).sort((a, b) => b.total - a.total);
  return (
    <Fragment>
      {formattedUsers.map((user) => (
        <UserInformation user={user} key={user.id} />
      ))}
    </Fragment>
  );
};

export const formatUsers = (users) => {
  if (!users) {
    return [];
  }

  const formatedUsers = Object.keys(users).map((userId) => users[userId]);

  return formatedUsers.map((user) => ({
    id: user.id,
    name: user.name,
    avatarURL: user.avatarURL,
    answered: Object.keys(user.answers).length,
    asked: user.questions.length,
    total: Object.keys(user.answers).length + user.questions.length,
  }));
};

export default Leaderboard;
