import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { handleGetQuestions, handleGetUsers } from './actions/shares';
import './App.css';

import QuestionType from './components/Questions/Question/QuestionType/QuestionType';
import NewQuestion from './components/NewQuestion/NewQuesiton';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Questions from './components/Questions/Questions';
import NavContainer from './components/NavContainer/NavContainer';
import Login from './components/Login/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import NotFound from './components/NotFound/NotFound';
import LoadingBar from 'react-redux-loading-bar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetUsers());
    dispatch(handleGetQuestions());
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <NavContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Questions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions/:id"
          element={
            <ProtectedRoute>
              <QuestionType />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <NewQuestion />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
