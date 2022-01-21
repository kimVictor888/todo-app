import { Box, FormControl, InputLabel, ListItemText, MenuItem, Select, Typography } from '@mui/material';
import { Todo, Status } from '../../types';
import { StyledListItem } from './TodoItem.styles';
import { statuses } from '../../constants/statuses';
import { useContext } from 'react';
import { TodosContext } from '../../context/TodosContext';

interface IProps {
  todo: Todo;
}

const TodoItem = ({ todo }: IProps) => {
  const { handleChangeStatus } = useContext(TodosContext);

  return (
    <StyledListItem disablePadding>
      <Typography variant='body2' component='p' sx={{ alignSelf: 'end' }}>
        {todo.date.toLocaleString()}
      </Typography>
      <ListItemText disableTypography>
        <Typography variant='h6' component='p' sx={{ wordWrap: 'break-word', mt: 2 }}>
          {todo.title}
        </Typography>
      </ListItemText>
      <Box
        sx={{
          mt: 2,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2,
        }}
      >
        <FormControl>
          <InputLabel id='select-label'>Status</InputLabel>
          <Select
            autoWidth
            labelId='select-label'
            label='Status'
            size='small'
            value={todo.status}
            onChange={(e) => {
              if (handleChangeStatus) {
                handleChangeStatus(todo.id, e.target.value as Status);
              }
            }}
          >
            {statuses.map((status) => (
              <MenuItem key={status} value={status} disabled={status === todo.status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </StyledListItem>
  );
};

export default TodoItem;
