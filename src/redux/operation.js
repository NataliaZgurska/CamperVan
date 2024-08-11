import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b3e5809f9169621ea15a51.mockapi.io';

// export const getAdverts = async page => {
//   const { data } = await axios.get(`/adverts?page=${page}&limit=4`);
//   return data;
// };

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=4`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTotalCountAdverts = createAsyncThunk(
  'adverts/fetchTotalCount',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data.length;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
