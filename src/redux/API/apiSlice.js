import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk to fetch data from the API
export const fetchCharacters = createAsyncThunk(
  'api/fetchCharacters',
  async () => {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character',
    );
    const data = await response.data;
    // console.log(data.results[1]);
    return data;
  },
);
// Create the API slice
const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
