import { useState } from 'react';
import classes from './Login.module.css';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleLogin } from '../../actions/shares';

const Login = () => {
  const users = useSelector((state) => state.users);
  const allUsers = Object.keys(users).map((userId) => users[userId]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [option, setOption] = useState({
    selected: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleLogin(option.selected));

    const fromPath = location.state ? location.state.from : '/';
    navigate(fromPath);
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginForm}>
        <p className={classes.title}>Employee Polls</p>
        <p className={classes.text}>Login</p>
        <form onSubmit={handleSubmit}>
          <Form.Select
            onChange={(e) => {
              setOption({
                selected: e.target.value,
              });
            }}
            style={{ width: '280px' }}>
            <option value="default">Please choose user to login</option>
            {allUsers.map((user) => (
              <option key={user.id} value={user.id}>
                {user.id}
              </option>
            ))}
          </Form.Select>
          <button
            className={classes.btnSubmit}
            type="submit"
            disabled={option.selected === '' || option.selected === 'default'}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
