import { createSlice } from '@reduxjs/toolkit';

export const filterContacts = createSlice({
  name: 'filter',
  initialState: [],
  reducers: {
    filterContact(state, action) {
      //   return state.contacts.filter(
      //     contact =>
      //       contact.name.includes(action.payload) ||
      //       contact.number.toLowerCase().includes(action.payload)
      //   );
    },
  },
});

export const { filterContact } = filterContacts.actions;
