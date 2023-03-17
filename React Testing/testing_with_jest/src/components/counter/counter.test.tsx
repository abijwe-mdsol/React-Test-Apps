
import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import userEvent from '@testing-library/user-event'

describe('Counter Component', () => {
  test("Loads Correctly", () => {
    render(<Counter count={0} />);

    const textElement = screen.getByText('Counter');
    expect(textElement).toBeInTheDocument();
  })

  test('handlers are called', async () => {
    // user.setup();
    const handleIncrementFn = jest.fn();
    const handleDecrementFn = jest.fn();
    render(
      <Counter count={0}
        handleIncrement={handleIncrementFn}
        handleDecrement={handleDecrementFn}
      />);

    const incrementBtn = screen.getAllByRole('button', { name: 'Increment' });
    const decrementBtn = screen.getAllByRole('button', { name: 'Decrement' });
    // console.log("incrementBtn", incrementBtn);

    await userEvent.click(incrementBtn[0]);
    await userEvent.click(decrementBtn[0]);

    expect(handleIncrementFn).toHaveBeenCalledTimes(1);
    expect(handleDecrementFn).toHaveBeenCalledTimes(1);
  })
});