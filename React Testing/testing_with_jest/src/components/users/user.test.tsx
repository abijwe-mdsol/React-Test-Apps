import { render, screen } from "@testing-library/react";
import Users from "./users";
import { rest } from 'msw'
import { Server } from "../../mocks/server";


describe('users', () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(2);
  });

  test("error while fetching the users", async () => {
    Server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<Users />);
    const error = await screen.findByText("Error while Fetching users");
    expect(error).toBeInTheDocument();
  });
})