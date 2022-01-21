import { Badge, Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => {
  return {
    minHeight: '40px',
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey['300'],
      color: theme.palette.common.black,
    },
  };
});

export const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    transform: 'scale(1) translate(100%, -32%)',
  },
}));
