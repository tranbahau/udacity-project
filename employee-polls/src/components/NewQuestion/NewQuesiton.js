import { Fragment, useState } from 'react';
import classes from './NewQuesiton.module.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { handleSaveQuestion } from '../../actions/shares';
import { useDispatch, useSelector } from 'react-redux';

function NewQuestion() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const handleSave = (e) => {
    e.preventDefault();

    if (option1 === '' || option2 === '') {
      alert('Please fill all option1 or option2');
      return;
    }

    if (option1 === option2) {
      alert('2 option not are the same value');
      return;
    }

    dispatch(
      handleSaveQuestion(
        {
          optionOneText: option1,
          optionTwoText: option2,
          author: authedUser,
        },
        navigate
      )
    );
  };

  const handleCancelClick = () => {
    navigate('/');
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <h3 data-testid="title" className={classes.title}>
          New Question
        </h3>
        <div className={classes.question}>Would you rather?</div>
        <form className={classes.formSubmit} onSubmit={handleSave}>
          <Form.Control
            data-testid="firstOpt"
            as="textarea"
            value={option1}
            className="mb-3"
            onChange={(e) => {
              setOption1(e.target.value);
            }}
            placeholder="Option 1"
          />
          <Form.Control
            data-testid="secondOpt"
            as="textarea"
            value={option2}
            className="mb-3"
            onChange={(e) => {
              setOption2(e.target.value);
            }}
            placeholder="Option 2"
          />
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size="sm">
              Save
            </Button>
            <Button variant="secondary" onClick={handleCancelClick} size="sm">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default NewQuestion;
