import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as enums from '../../utils/enums/Detalhes';

type FiltroState = {
  termo: string; //o texto que vai buscar
  criterio: 'prioridade' | 'status' | 'todas';
  valor?: enums.Prioridade | enums.Status;
};

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas',
};

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
  },
});

export const { alteraTermo } = filtroSlice.actions;

export default filtroSlice.reducer;
