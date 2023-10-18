import { useSelector } from 'react-redux';
import classes from './AnsweredDetails.module.css';
import Options from './Options/Options';

function AnsweredDetails({ question }) {
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const options = formatOptions(question, authedUser);
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img
          src={users[question.author].avatarURL}
          alt=""
          className={classes.img}
        />
      </div>
      <div className={classes.info}>
        <h3 className={classes.userName}>Asked by {question.author}</h3>
        <Options options={options} />
      </div>
    </div>
  );
}

const formatOptions = (question, authedUser) => {
  let userAnswer = '';
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercentage =
    optionOneVotes === 0 ? 0 : Math.round((optionOneVotes / totalVotes) * 100);

  const optionTwoPercentage =
    optionTwoVotes === 0 ? 0 : Math.round((optionTwoVotes / totalVotes) * 100);

  if (question.optionOne.votes.includes(authedUser)) {
    userAnswer = '1';
  }
  if (question.optionTwo.votes.includes(authedUser)) {
    userAnswer = '2';
  }

  return [
    {
      optionType: '1',
      totalVotes,
      userAnswer,
      optionVotes: optionOneVotes,
      optionPercentage: optionOnePercentage,
      text: question.optionOne.text,
    },
    {
      optionType: '2',
      totalVotes,
      userAnswer,
      optionVotes: optionTwoVotes,
      optionPercentage: optionTwoPercentage,
      text: question.optionTwo.text,
    },
  ];
};

export default AnsweredDetails;
