import { Fragment, useState } from 'react';
import classes from './QuestionForm.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../../../../actions/shares';

function QuestionForm({ question }) {
  let navigate = useNavigate();
  const allUsers = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    seleted: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.seleted) {
      alert('You need to choose one or two first');
      return;
    }
    dispatch(
      handleSaveQuestionAnswer(
        {
          questionId: question.id,
          answer: state.seleted,
          authedUser: authedUser,
        },
        navigate
      )
    );
  };

  const handleChange = (e) => {
    setState({
      seleted: e.target.value,
    });
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img
            src={allUsers[question.author].avatarURL}
            alt=""
            className={classes.img}
          />
        </div>
        <div className={classes.info}>
          <h4>{allUsers[question.author].name} asks</h4>
          <span>Would you rather?</span>
          <form className={classes.formSubmit} onSubmit={handleSubmit}>
            <div key="default-radio" className="mb-3">
              <Form.Check
                type="radio"
                id="radio1"
                name="option"
                value="optionOne"
                checked={state.seleted === 'optionOne'}
                onChange={handleChange}
                label={question.optionOne.text}
              />

              <Form.Check
                type="radio"
                id="radio2"
                name="option"
                value="optionTwo"
                checked={state.seleted === 'optionTwo'}
                onChange={handleChange}
                label={question.optionTwo.text}
              />
            </div>
            <Button type="submit" size="sm" variant="primary">
              Answer
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default QuestionForm;
