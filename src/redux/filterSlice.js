import { createSlice } from '@reduxjs/toolkit';

export const filterContacts = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return action.payload;
    },
  },
});

export const { filterContact } = filterContacts.actions;
