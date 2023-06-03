import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import apiSliceReducer, { fetchCharacters } from '../redux/API/apiSlice';

jest.mock('axios');

const mockData = {
  results: [
    {
      id: 1, name: 'Character 1', planet: 'Planet 1', status: 'Alive', species: 'Species 1',
    },
    {
      id: 2, name: 'Character 2', planet: 'Planet 2', status: 'Dead', species: 'Species 2',
    },
  ],
};

describe('apiSlice reducer', () => {
  it('should handle fetchCharacters.pending', () => {
    const initialState = { data: [], status: 'idle', error: null };
    const nextState = apiSliceReducer(initialState, fetchCharacters.pending());
    expect(nextState.status).toBe('loading');
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchCharacters.fulfilled', () => {
    const initialState = { data: [], status: 'loading', error: null };
    const nextState = apiSliceReducer(initialState, fetchCharacters.fulfilled(mockData));
    expect(nextState.status).toBe('succeeded');
    expect(nextState.data).toEqual(mockData);
  });
});
