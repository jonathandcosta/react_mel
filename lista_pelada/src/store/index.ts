import { configureStore } from '@reduxjs/toolkit';

import detalhesReducer from './reducers/detalhes';

const store = configureStore({
  reducer: {
    detalhes: detalhesReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
