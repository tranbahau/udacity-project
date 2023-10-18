import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NewQuesiton from './NewQuesiton';
import { reducers } from '../../reducers';
import thunk from 'redux-thunk';
import { logger } from '../../middleware/logger';
import { configureStore } from '@reduxjs/toolkit';

describe('New Question Component', () => {
  const store = configureStore({
    reducer: reducers,
    middleware: [thunk, logger],
  });

  it('should render component correctly', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewQuesiton />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it('should display option text value correctly', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewQuesiton />
        </BrowserRouter>
      </Provider>
    );

    const titleElement = component.getByTestId('title');
    const firstOptElement = component.getByTestId('firstOpt');
    const secondOptElement = component.getByTestId('secondOpt');

    expect(titleElement.textContent).toBe('New Question');
    fireEvent.change(firstOptElement, { target: { value: 'React' } });
    fireEvent.change(secondOptElement, { target: { value: 'Angular' } });
    expect(firstOptElement.value).toBe('React');
    expect(secondOptElement.value).toBe('Angular');
  });
});
