import { Box, List } from '@mui/material';
import { StyledBadge, StyledButton } from './TodoList.styles';
import { Status, Todos } from '../../types';
import TodoItem from '../TodoItem';

interface IProps {
  todos: Todos;
  status: Status;
}

const TodoList = ({ todos, status }: IProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <StyledButton variant='contained' color='inherit' fullWidth disabled>
        <StyledBadge badgeContent={todos.length} color='primary'>
          {status}
        </StyledBadge>
      </StyledButton>
      <List disablePadding>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
