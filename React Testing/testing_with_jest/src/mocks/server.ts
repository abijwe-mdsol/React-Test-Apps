import { setupServer } from 'msw/node';
import { Handlers } from './handlers'

export const Server = setupServer(...Handlers);