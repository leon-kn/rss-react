import { combineReducers, configureStore } from '@reduxjs/toolkit';
import characterReducer from './reducers/CharacterSlice';
import formReducer from './reducers/FormSlice';
import characterAPI from 'src/services/CharacterService';

const rootReducer = combineReducers({
  characterReducer,
  formReducer,
  [characterAPI.reducerPath]: characterAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

export default store;
