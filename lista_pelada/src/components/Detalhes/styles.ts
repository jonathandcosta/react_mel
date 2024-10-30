import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

import * as enums from '../../utils/enums/Detalhes';

type TagProps = {
  prioridade?: enums.Prioridade;
  status?: enums.Status;
  parametro: 'status' | 'prioridade';
};

function retornaCorFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.MENSALISTAS)
      return variaveis.verde;
    if (props.prioridade === enums.Prioridade.DIARISTA)
      return variaveis.diarista;
    if (props.prioridade === enums.Prioridade.CONVIDADO)
      return variaveis.convidado;
  } else {
    if (props.status === enums.Status.AZUL) return variaveis.azul;
    if (props.status === enums.Status.AMARELO) return variaveis.amarelo;
    if (props.status === enums.Status.LARANJA) return variaveis.laranja;
  }
  return '#ccc';
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 16px;
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: Poppins, monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 10px;
  resize: none;
  border: solid 1px #eee;
  border-radius: 8px;
`;

export const Acoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 16px;
`;

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`;
