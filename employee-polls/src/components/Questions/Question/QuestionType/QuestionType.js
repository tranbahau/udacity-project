import { useSelector } from 'react-redux';
import AnsweredDetails from '../QuestionDetails/AnsweredDetails';

import QuestionForm from '../QuestionForm/QuestionForm';
import { useParams } from 'react-router-dom';
import NotFound from '../../../NotFound/NotFound';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};

function QuestionType() {
  let renderedQuestion;
  const allQuestions = useSelector((state) => state.questions);
  const user = useSelector((state) => state.authedUser);

  const { id } = useParams();
  const question = allQuestions[id];
  if (!question) {
    return <NotFound />;
  }

  const isAnswered =
    question.optionOne.votes.includes(user) ||
    question.optionTwo.votes.includes(user);

  if (isAnswered) {
    renderedQuestion = <AnsweredDetails question={question} />;
  } else {
    renderedQuestion = <QuestionForm question={question} />;
  }

  return renderedQuestion;
}

export default withRouter(QuestionType);
