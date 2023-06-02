import { fetchCharacters, apiSlice } from '../redux/API/apiSlice';

describe('API Slice', () => {
  it('should create the fetchCharacters async thunk', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    // Mock the axios get method
    const axiosMock = jest.spyOn(axios, 'get');
    axiosMock.mockResolvedValueOnce({ data: { results: [] } });

    // Dispatch the fetchCharacters async thunk
    await fetchCharacters()(dispatch, getState, null);

    // Verify that the correct actions are dispatched
    expect(dispatch).toHaveBeenCalledWith(apiSlice.actions.fetchCharacters.pending());
    expect(dispatch).toHaveBeenCalledWith(apiSlice.actions.fetchCharacters.fulfilled({ results: [] }));
  });
});

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import HomePage from '../components/homePage';

// Mock the API response data
const mockResponse = {
  results: [
    { id: 1, name: 'Character 1', planet: 'Planet 1', status: 'Alive', species: 'Species 1' },
    { id: 2, name: 'Character 2', planet: 'Planet 2', status: 'Dead', species: 'Species 2' },
  ],
};

// Mock the Redux store
const mockStore = configureStore([]);
const initialState = {
  api: {
    data: mockResponse.results,
    status: 'succeeded',
    error: null,
  },
};
const store = mockStore(initialState);

// Mock the axios get method
jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;
axiosMock.get.mockResolvedValue({ data: mockResponse });

describe('HomePage', () => {
  it('should render character cards', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // Wait for the character cards to be rendered
    await screen.findByText('Character 1');

    // Verify that the character cards are displayed
    expect(screen.getByText('Character 1')).toBeInTheDocument();
    expect(screen.getByText('Character 2')).toBeInTheDocument();
  });
});