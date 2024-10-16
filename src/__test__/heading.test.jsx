import { render, screen } from '@testing-library/react';
import Heading from '../pages/detail/Heading';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { data } from '../constants';

const mockStore = configureStore([thunk]);

it('should display a loader on the screen when the store is loading', () => {
  const store = mockStore({ isLoading: true, error: null, data: null });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  screen.getByTestId('header-loader');
});

it('should remove the loader from the screen when the store finishes loading', () => {
  const store = mockStore({ isLoading: false, error: null, data: null });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  const element = screen.queryByTestId('header-loader');

  expect(element).toBeNull();
});

it('should display the data on the screen when it is loaded into the store', () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  screen.getByRole('heading', { name: data.country });

  const flagImg = screen.getByAltText('flag');

  expect(flagImg).toHaveAttribute('src', `https://flagsapi.com/TR/flat/64.png`);
});
