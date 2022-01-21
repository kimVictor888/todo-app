import { createContext } from 'react';
import { Context } from '../types';

export const TodosContext = createContext({
  todos: [],
  searchField: ['', () => {}],
} as Context);
