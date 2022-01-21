import { Grid } from '@mui/material';
import AddForm from '../AddForm';
import History from '../History';

const Content = () => {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AddForm />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9}>
        <History />
      </Grid>
    </Grid>
  );
};

export default Content;
