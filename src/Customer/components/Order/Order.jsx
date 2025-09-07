import React from 'react';
import { Grid } from '@mui/material';
import OrderCard from './OrderCard';

const Order = () => {
  return (
    <div>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item xs={12}>
          <OrderCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
