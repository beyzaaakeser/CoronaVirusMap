import { render, screen } from '@testing-library/react';
import Item from '../pages/home/Item';

test('renders the passed props correctly', () => {
  render(<Item color="text-red-500" text="Sample Text" value="15,4M" />);

  const icon = screen.getByTestId('svg');

  expect(icon).toHaveClass('text-red-500');

  screen.getByText('Sample Text');

  screen.getByRole("heading", {name:"15,4M"})
});
