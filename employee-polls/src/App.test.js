import { reducers } from './reducers';
import { Provider } from 'react-redux';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { logger } from './middleware/logger';
import { setAuthedUser } from './actions/authedUser';
import { configureStore } from '@reduxjs/toolkit';

describe('App', () => {
  const store = configureStore({
    reducer: reducers,
    middleware: [thunk, logger],
  });
  it('should render the component', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it('should show NavBar page when logged in', () => {
    store.dispatch(setAuthedUser('tylermcginnis'));

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const heading = component.getByTestId('nav-container');
    expect(heading).toBeInTheDocument();
  });
});
