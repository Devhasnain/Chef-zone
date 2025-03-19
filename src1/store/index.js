import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { MMKV } from 'react-native-mmkv';

import authReducer from './authSlice/index';
import baseApi from '../services/api';


const rootReducer = combineReducers({
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const storage = new MMKV();
// localStorage.clearAll();
export const reduxStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    storage.getString(key);
    return Promise.resolve(true);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve(true);
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whiteList: ['auth'],
  autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };

