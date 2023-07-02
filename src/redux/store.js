import { configureStore } from '@reduxjs/toolkit';
import { changeContacts } from './contactsSlice';
import { filterContacts } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: changeContacts.reducer,
    filter: filterContacts.reducer,
  },
});
