import { createSlice, createAsyncThunk, combineReducers } from '@reduxjs/toolkit';

const Url = 'https://rickandmortyapi.com/api/character/';

export const initialState = {
  isLoading: true,
  data: null,
};

export const getDisplay = createAsyncThunk('details/getDisplay', async (id) => {
  const response = await fetch(`${Url}/${id}`);
  const data = await response.json();
  return data;
});

export const displaySlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    // Handle the loading state
    [getDisplay.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),

    // Handle the fulfilled state
    [getDisplay.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
  },
});

const rootReducer = combineReducers({
  display: displaySlice.reducer,
});

export default rootReducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const Url = 'https://rickandmortyapi.com/api/character/';

// export const initialState = {
//   isLoading: true,
//   data: null,
// };

// export const getDisplay = createAsyncThunk('details/getDisplay', async (id) => {
//   const response = await fetch(`${Url}/${id}`);
//   const data = await response.json();
//   return data;
// });

// export const displaySlice = createSlice({
//   name: 'details',
//   initialState,
//   reducers: {
//     // Handle the loading state
//     [getDisplay.pending]: (state) => ({
//       ...state,
//       isLoading: true,
//     }),

//     // Handle the fulfilled state
//     [getDisplay.fulfilled]: (state, action) => ({
//       ...state,
//       isLoading: false,
//       data: action.payload,
//     }),
//   },
// });

// export default displaySlice.reducer;