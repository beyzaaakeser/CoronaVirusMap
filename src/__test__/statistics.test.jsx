import { queryByTestId, render, screen, waitFor } from '@testing-library/react';
import Statistics from '../pages/home/Statistics';
import api from '../api';
import millify from 'millify';

jest.mock('../api');

describe('Statistics Component Tests', () => {
  beforeEach(()=>{jest.clearAllMocks()});

  test('renders the loading state initially', async () => {
    api.get.mockResolvedValueOnce({ data: [] });

    render(<Statistics />);

    const loader = screen.getByTestId('home-loader');
  });

  test("'displays statistics after loader'", async () => {
    const totals = {
      confirmed: 701166431,
      recovered: 590451974,
      critical: 2877,
      deaths: 7014639,
      lastChange: '2024-06-04T00:28:51+00:00',
      lastUpdate: '2024-08-09T09:13:41+00:00',
    };

    api.get.mockResolvedValueOnce({ data: [totals] });

    render(<Statistics />);

    await waitFor(() =>
      expect(screen.queryByTestId('home-loader')).not.toBeInTheDocument()
    );

    expect(screen.getByText(/Total Cases/i));
    expect(screen.getByText(millify(totals.confirmed)));

    expect(screen.getByText(/Total Recovered cases/i));
    expect(screen.getByText(millify(totals.recovered)));

    expect(screen.getByText(/Total deaths/i));
    expect(screen.getByText(millify(totals.deaths)));
  });

  test('displays error message when statistics cannot be fetched', async () => {
    api.get.mockRejectedValueOnce(new Error('Request timeout.'));

    render(<Statistics />);

    await waitFor(() =>
      expect(screen.queryByTestId('home-loader')).not.toBeInTheDocument()
    );

    screen.getByText('Statistics cannot be obtained.');
  });
});
