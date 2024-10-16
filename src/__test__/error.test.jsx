import { fireEvent, render, screen } from '@testing-library/react';
import Error from '../components/error/Error';

it('displays the error message passed as a prop', () => {
  render(<Error info="Connection Error" />);
  screen.getByText(/Connection/g);
});

it('calls the function passed as a prop when the button is clicked', () => {
  
  const mockFn = jest.fn();

  render(<Error info="Connection Error" retry={mockFn} />);

  const button = screen.getByRole("button")
  fireEvent.click(button)

  expect(mockFn).toHaveBeenCalled();

});
