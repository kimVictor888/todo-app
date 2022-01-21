import { ListItem, styled } from '@mui/material';

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)} `,
  border: '1px solid #e0e0e0',
  borderRadius: theme.shape.borderRadius,
  flexDirection: 'column',
  alignItems: 'start',
  backgroundColor: theme.palette.grey['200'],
}));
