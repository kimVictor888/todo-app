import { CssBaseline } from '@mui/material';
import { TodosContext } from './context/TodosContext';
import { useState } from 'react';
import { Status, Todo, Todos } from './types';
import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  const [todos, setTodos] = useState([] as Todos);
  const searchField = useState('');

  const handleCreate = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleChangeStatus = (id: string, newStatus: Status) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: newStatus };
        } else {
          return todo;
        }
      }),
    );
  };

  const handleFilter = (text: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.title.includes(text)));
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        searchField,
        handleCreate,
        handleChangeStatus,
        handleFilter,
      }}
    >
      <CssBaseline />
      <Header />
      <Content />
    </TodosContext.Provider>
  );
};

export default App;
