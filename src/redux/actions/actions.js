import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const getDetails = createAsyncThunk('covid/getDetails', async (code) => {
  const res = await api.get('/country/code', {
    params: {
      code,
    },
  });
  const result = res.data[0];

  result.lastChange = new Date(result.lastChange).toLocaleDateString();
  result.lastUpdate = new Date(result.lastUpdate).toLocaleDateString();

  return result;
});
