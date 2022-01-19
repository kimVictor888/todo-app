import { AppBar, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTextField, StyledToolbar } from "./Header.styles";

const Header = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">TODO Application</Typography>
        <StyledTextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "rgba(255,255,255,0.5)" }} />
              </InputAdornment>
            ),
          }}
        />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
