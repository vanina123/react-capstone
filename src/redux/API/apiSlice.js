import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the API endpoint URL
const API_URL = 'https://rickandmortyapi.com/api/character/';

// Create an async thunk to fetch data from the API
// export const fetchCharacters = createAsyncThunk(
//   'api/fetchCharacters',
//   async () => {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     return data;
//   }
// );
export const fetchCharacters = createAsyncThunk('api/fetchCharacters', async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error('Failed to fetch data from the API');
    }
});

// Create the API slice
const apiSlice = createSlice({
  name: 'api',
  initialState: {
    characters: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
export const { } = apiSlice.actions;