import { AppBar, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledTextField, StyledToolbar, StyledTypography } from './Header.styles';
import { useContext } from 'react';
import { TodosContext } from '../../context/TodosContext';

const Header = () => {
  const {
    searchField: [searchValue, setSearchValue],
  } = useContext(TodosContext);

  return (
    <AppBar position='static'>
      <StyledToolbar>
        <StyledTypography variant='h6'>TODO Application</StyledTypography>
        <StyledTextField
          variant='outlined'
          size='small'
          placeholder='Search...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
              </InputAdornment>
            ),
          }}
        />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
