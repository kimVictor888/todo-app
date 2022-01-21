import { Dispatch, SetStateAction } from 'react';

export type Status = 'created' | 'running' | 'done' | 'deleted';

export interface FormInputs {
  title: string;
}

export interface Todo {
  id: string;
  title: string;
  status: Status;
  date: Date;
}

export type Todos = Todo[];

export interface Context {
  todos: Todos;
  searchField: [string, Dispatch<SetStateAction<string>>];
  handleCreate?: (todo: Todo) => void;
  handleChangeStatus?: (id: string, newStatus: Status) => void;
  handleFilter?: (text: string) => void;
}
