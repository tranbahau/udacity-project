import { Fragment } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import classses from './Questions.module.css';
import Quesiton from './Question/Question';
import { useSelector } from 'react-redux';

const Questions = () => {
  const quesitonsInfo = useSelector((state) => ({
    allQuestions: state.questions,
    allUsers: state.users,
    user: state.authedUser,
  }));

  const questionIds = getQuestionIds({
    questions: quesitonsInfo.allQuestions,
    authedUser: quesitonsInfo.user,
  });

  const answeredQuestions = getFormattedQuestions(
    questionIds.answeredQuesitons,
    quesitonsInfo.allQuestions,
    quesitonsInfo.allUsers
  ).sort((a, b) => b.timestamp - a.timestamp);

  const unanswerQuestions = getFormattedQuestions(
    questionIds.unanswerQuestions,
    quesitonsInfo.allQuestions,
    quesitonsInfo.allUsers
  ).sort((a, b) => b.timestamp - a.timestamp);

  return (
    <Fragment>
      <div className={classses.container}>
        <Tabs defaultActiveKey="unanswer">
          <Tab eventKey="answered" title="Answered">
            {answeredQuestions.map((question) => (
              <Quesiton key={question.id} questionDetails={question} />
            ))}
          </Tab>
          <Tab eventKey="unanswer" title="Unanswer">
            {unanswerQuestions.map((question) => (
              <Quesiton key={question.id} questionDetails={question} />
            ))}
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
};

const getQuestionIds = ({ questions, authedUser }) => {
  const answeredQuesitons = Object.keys(questions).filter(
    (key) =>
      questions[key].optionOne.votes.includes(authedUser) ||
      questions[key].optionTwo.votes.includes(authedUser)
  );

  const unanswerQuestions = Object.keys(questions).filter(
    (key) =>
      !questions[key].optionOne.votes.includes(authedUser) &&
      !questions[key].optionTwo.votes.includes(authedUser)
  );

  return {
    unanswerQuestions: unanswerQuestions,
    answeredQuesitons: answeredQuesitons,
  };
};

const getFormattedQuestions = (questionTypeIds, allQuestions, allUsers) => {
  return questionTypeIds.map((id) => ({
    id: allQuestions[id].id,
    author: allQuestions[id].author,
    avatarUrl: allUsers[allQuestions[id].author].avatarURL,
    timestamp: allQuestions[id].timestamp,
  }));
};

export default Questions;
