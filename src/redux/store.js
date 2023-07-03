import { configureStore } from '@reduxjs/toolkit';
import { filterContacts } from './filterSlice';
import { changeContacts } from './contactsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
  // whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, changeContacts.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterContacts.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// console.log(Storage.getItem('root'));
export const persistor = persistStore(store);
