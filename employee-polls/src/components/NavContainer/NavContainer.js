import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import classes from './NavContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { setUserLogOut } from '../../actions/authedUser';

function NavContainer() {
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setUserLogOut());
  };

  return (
    <Navbar
      data-testid="nav-container"
      className={classes.container}
      bg="light"
      expand="lg">
      <Container>
        <Navbar.Brand to="/">Employee Polls Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={classes.navlink} to="/">
              Questions
            </NavLink>
            <NavLink className={classes.navlink} to="/leaderboard">
              Leaderboard
            </NavLink>
            <NavLink className={classes.navlink} to="/add">
              New
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {authedUser ? (
          <Navbar.Collapse className="justify-content-end">
            <span className={classes.userId}>
              Signed in as <b> {authedUser} </b>
            </span>
            <Button type="primary" size="sm" onClick={handleLogOut}>
              Sign Out
            </Button>
          </Navbar.Collapse>
        ) : (
          ''
        )}
      </Container>
    </Navbar>
  );
}

export default NavContainer;
