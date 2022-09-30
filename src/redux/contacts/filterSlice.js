import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    addFilter(state, action) {
      state = action.payload;
    }
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const filterReducer = persistReducer(
  persistConfig,
  filterSlice.reducer
);

export const { addFilter } = filterSlice.actions;