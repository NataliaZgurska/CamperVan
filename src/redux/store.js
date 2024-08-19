import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './modalSlice';
import { favoriteReducer } from './favorites';

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

import { campersReducer } from './campers/campersSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    modal: modalReducer,
    favorite: favoriteReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
