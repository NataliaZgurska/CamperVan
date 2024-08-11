import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b3e5809f9169621ea15a51.mockapi.io';

// export const getAdverts = async page => {
//   const { data } = await axios.get(`/adverts?page=${page}&limit=4`);
//   return data;
// };

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      //   console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
