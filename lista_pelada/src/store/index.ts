import { configureStore } from '@reduxjs/toolkit';

import detalhesReducer from './reducers/detalhes';
import filtroReducer from './reducers/filtro';

const store = configureStore({
  reducer: {
    detalhes: detalhesReducer,
    filtro: filtroReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
