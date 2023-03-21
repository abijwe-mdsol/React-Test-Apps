// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { Server } from './mocks/server';

beforeAll(() => Server.listen());

afterEach(() => Server.restoreHandlers());

afterAll(() => Server.close());