import { alpha, styled, TextField, Toolbar, Typography } from '@mui/material';

export const StyledToolbar = styled(Toolbar)(() => ({
  justifyContent: 'space-between',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      color: alpha(theme.palette.common.white, 1),
    },
    '& fieldset': {
      border: 'none',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
