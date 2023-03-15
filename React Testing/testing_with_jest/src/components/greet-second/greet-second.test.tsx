
/* This is built using test driven approach */

import { render, screen } from "@testing-library/react"
import GreetSecond from "./greet-second"

test('Greet second render correctly', () => {
  render(<GreetSecond />);
  const testText = screen.getByText('Hello');
  expect(testText).toBeInTheDocument();
})

test('Greet renders with a name', () => {
  render(<GreetSecond name="Akash" />)
  const textElement = screen.getByText('Hello Akash');
  expect(textElement).toBeInTheDocument();
})
