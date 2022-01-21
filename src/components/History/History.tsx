import { Box, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { TodosContext } from '../../context/TodosContext';
import TodoList from '../TodoList';

const History = () => {
  const {
    todos,
    searchField: [searchValue],
  } = useContext(TodosContext);

  return (
    <Box>
      <Typography align='center' variant='h5' component='p' gutterBottom>
        History
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <TodoList
            todos={todos.filter((todo) => todo.status === 'created' && todo.title.includes(searchValue.trim()))}
            status='created'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <TodoList
            todos={todos.filter((todo) => todo.status === 'running' && todo.title.includes(searchValue.trim()))}
            status='running'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <TodoList
            todos={todos.filter((todo) => todo.status === 'done' && todo.title.includes(searchValue.trim()))}
            status='done'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <TodoList
            todos={todos.filter((todo) => todo.status === 'deleted' && todo.title.includes(searchValue.trim()))}
            status='deleted'
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default History;
