import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
// Get the variable count and make sure it is equal to 0
// getByTestId
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Need the count variable
  const count = screen.getByTestId('count');
  const add = screen.getByText('+');
  userEvent.click(add);
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Need the count variable
  const count = screen.getByTestId('count');
  const minus = screen.getByText('-');
  userEvent.click(minus);
  expect(count).toHaveTextContent('-1');
});

