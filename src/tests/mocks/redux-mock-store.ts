import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../redux/reducers/index';

export const mockStore = (initialState: any) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};
