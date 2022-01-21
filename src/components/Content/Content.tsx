import { Grid } from '@mui/material';
import AddForm from '../AddForm';
import History from '../History';

const Content = () => {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item>
        <AddForm />
      </Grid>
      <Grid item xs>
        <History />
      </Grid>
    </Grid>
  );
};

export default Content;
