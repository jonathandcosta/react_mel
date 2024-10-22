import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Detalhe from '../../models/Detalhes';

import * as enums from '../../utils/enums/Detalhes';

type DetalhesState = {
  situacao: Detalhe[];
};

const initialState: DetalhesState = {
  situacao: [
    {
      id: 1,
      titulo: 'Ordem de Chegada 1',
      prioridade: enums.Prioridade.MENSALISTAS,
      status: enums.Status.AMARELO,
      descricao: 'tudo certo',
    },
    {
      id: 2,
      titulo: 'Ordem de Chegada 2',
      prioridade: enums.Prioridade.DIARISTA,
      status: enums.Status.LARANJA,
      descricao: 'Faltou sabado passado',
    },
    {
      id: 3,
      titulo: 'Ordem de Chegada 3',
      prioridade: enums.Prioridade.MENSALISTAS,
      status: enums.Status.AZUL,
      descricao: 'Tudo certo',
    },
    {
      id: 4,
      titulo: 'Ordem de Chegada 4',
      prioridade: enums.Prioridade.CONVIDADO,
      status: enums.Status.LARANJA,
      descricao: 'Convidado por Freire',
    },
  ],
};

const detalhesSlice = createSlice({
  name: 'detalhes',
  initialState: initialState,
  reducers: {
    remmover: (state, action: PayloadAction<number>) => {
      state.situacao = state.situacao.filter(
        (detalhe) => detalhe.id !== action.payload,
      );
    },
  },
});

export const { remmover } = detalhesSlice.actions;

export default detalhesSlice.reducer;
