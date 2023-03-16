import { render, screen } from '@testing-library/react';
import { Hello } from './hello';
it('should render hello world', () => {
  render(<Hello />);
  const heading = screen.getByText(/hello world/i);
  expect(heading).toBeInTheDocument();
});
