import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import Content from '../pages/detail/Content';
import { data } from '../constants';

const mockStore = configureStore([thunk]);

test('should display a loader on the screen when the store is loading', () => {
  const store = mockStore({ isLoading: true, error: null, data: null });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getAllByTestId('card-loader');
});

it('displays error message when there is an error in the store', () => {
  const store = mockStore({
    isLoading: false,
    error: 'Failed to connect: Request timed out',
    data: null,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getByTestId('error');
});

it('renders a card for each item in the store', () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data: data,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  const arr = Object.entries(data);

  arr.forEach((item) => {
    screen.getByText(item[0]);
    screen.getAllByText(!item[1] ? 'Unknown' : item[1]);
  });
});
