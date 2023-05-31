import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const Url = 'https://rickandmortyapi.com/api/character/';

export const initialState = {
  characters: [],
  isLoading: true,
};

export const getDisplays = createAsyncThunk('home/getDisplays', async () => {
  // const randomArray = Array.from({ length: 25 }, () => Math.floor(Math.random() * 800));
  const response = await fetch(`${Url}`);
  const data = await response.json();
  console.log(data);
  const characterData = data.map((char) => ({
    id: char.id,
    name: char.name,
    status: char.status,
    species: char.species,
    image: char.image,
    origin: char.origin.name,
  }));
  return characterData;
});

export const homeSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    // Handle the loading state
    [getDisplays.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),

    // Handle the fulfilled state
    [getDisplays.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      characters: action.payload,
    }),
  },
});

export default homeSlice.reducer;
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const Url = 'https://rickandmortyapi.com/api/character/';

// export const initialState = {
//   characters: [],
//   isLoading: true,
// };

// export const getDisplays = createAsyncThunk('home/getDisplays', async () => {
//   const randomArray = Array.from({ length: 25 }, () => Math.floor(Math.random() * 800));
//   const response = await fetch(`${Url}/${randomArray}`);
//   const data = await response.json();
//   const characterData = data.map((char) => ({
//     id: char.id,
//     name: char.name,
//     status: char.status,
//     species: char.species,
//     image: char.image,
//     origin: char.origin.name,
//     episodes: char.episode,
//   }));
//   return characterData;
// });

// export const homeSlice = createSlice({
//   name: 'city',
//   initialState,
//   reducers: {
//     // Handle the loading state
//     [getDisplays.pending]: (state) => ({
//       ...state,
//       isLoading: true,
//     }),

//     // Handle the fulfilled state
//     [getDisplays.fulfilled]: (state, action) => ({
//       ...state,
//       isLoading: false,
//       characters: action.payload,
//     }),
//   },
// });

// export default homeSlice.reducer;