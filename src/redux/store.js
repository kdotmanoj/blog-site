import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import blogReducer from './reducers/blogReducer';
import themeReducer from './reducers/themeReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  blogs: blogReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer });

const persistor = persistStore(store);

export { store, persistor };
