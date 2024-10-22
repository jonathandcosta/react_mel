import { useState } from "react";
import { Acoes, Botao, BotaoCancelarRemover, BotaoSalvar, Card, Descricao, Tag, Titulo } from "./styles";

import * as enums from '../../utils/enums/Detalhes';


type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

export const Detalhes = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Tag parametro="prioridade" prioridade={prioridade}>{prioridade}</Tag>
      <Tag parametro="status" status={status}>{status}</Tag>
      <Descricao value={descricao} />
      <Acoes>
        {estaEditando ? (
          <>
            <BotaoSalvar>Salvar</BotaoSalvar>
            <BotaoCancelarRemover onClick={() => setEstaEditando(false)}>Cancelar</BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover>Remover</BotaoCancelarRemover>
          </>
        )}
      </Acoes>
    </Card>
  )
}