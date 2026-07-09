import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /nested by lauren/i })).toBeInTheDocument();
});
