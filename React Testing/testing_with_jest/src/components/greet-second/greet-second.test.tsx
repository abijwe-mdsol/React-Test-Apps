
/* This is built using test driven approach */

import { render, screen } from "@testing-library/react"
import GreetSecond from "./greet-second"


// describe.only('Greet component', () => {
// describe.skip('Greet component', () => {
describe('Greet component', () => {

  test('second render correctly', () => {
    render(<GreetSecond />);
    const testText = screen.getByText('Hello');
    expect(testText).toBeInTheDocument();
  })

  test('renders with a name', () => {
    render(<GreetSecond name="Akash" />)
    const textElement = screen.getByText('Hello Akash');
    expect(textElement).toBeInTheDocument();
  })

  // Nested Describe 
  describe('Nested Greet', () => {
    test('renders with a name', () => {
      render(<GreetSecond name="Akash" />)
      const textElement = screen.getByText('Hello Akash');
      expect(textElement).toBeInTheDocument();
    })
  })

});

// Multiple Describe
describe('Multiple Describe Greet', () => {
  test('renders with a name', () => {
    render(<GreetSecond name="Akash" />)
    const textElement = screen.getByText('Hello Akash');
    expect(textElement).toBeInTheDocument();
  })
})