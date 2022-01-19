import { alpha, styled, TextField, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: alpha(theme.palette.common.white, 1),
    },
    "& fieldset": {
      border: "none",
    },
  },
}));
