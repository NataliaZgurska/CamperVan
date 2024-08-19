import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://66b3e5809f9169621ea15a51.mockapi.io';
axios.defaults.baseURL = 'https://6623447f3e17a3ac846eeb57.mockapi.io';

export const getAllAdverts = createAsyncThunk(
  'campers/getAllAdverts',
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get('/adverts');
      const response = await axios.get('/CampersApp');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdverts = createAsyncThunk(
  'campers/getAdverts',
  async (page, thunkAPI) => {
    try {
      // const response = await axios.get(`/adverts?page=${page}&limit=4`);
      const response = await axios.get(`/CampersApp?page=${page}&limit=4`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTotalCountAdverts = createAsyncThunk(
  'campers/getTotalCountAdverts',
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get('/adverts');
      const response = await axios.get('/CampersApp');
      return response.data.length;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdvertById = createAsyncThunk(
  'campers/getAdvertById',
  async (id, thunkAPI) => {
    try {
      // const response = await axios.get(`/adverts/${id}`);
      const response = await axios.get(`/CampersApp/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = async id => {
  // const response = await axios.get(`/adverts/${id}`);
  const response = await axios.get(`/CampersApp/${id}`);
  return response.data;
};
