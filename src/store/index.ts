import { combineReducers, configureStore } from '@reduxjs/toolkit';
import characterReducer from './reducers/CharacterSlice';
import formReducer from './reducers/FormSlice';

const rootReducer = combineReducers({
  characterReducer,
  formReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

export default store;
