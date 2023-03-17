import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test('Greet renders correctly', () => {
  render(<Greet />);
  const testElement = screen.getByText(/hello/i);
  expect(testElement).toBeInTheDocument();
})

test('test increment function', () => {
  const increment = jest.fn();
  increment(12);
  let resposne = 13;
  expect(increment).toHaveBeenCalledTimes(1);
})