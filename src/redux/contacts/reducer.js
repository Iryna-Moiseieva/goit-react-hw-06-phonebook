import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, addFilter } from './actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

//createSlice

// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// export const contactsSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//   },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact } =
//   contactsSlice.actions;

// export const filterSlice = createSlice({
//   name: 'filters',
//   initialState: '',
//   reducers: {
//     addFilter(state, action) {
//       state = action.payload;
//     }
//   },
// });

// export const filterReducer = persistReducer(
//   persistConfig,
//   filterSlice.reducer
// );

// export const { addFilter } = filterSlice.actions;
