import { useState } from "react";
import { Acoes, Botao, BotaoCancelarRemover, BotaoSalvar, Card, Descricao, Tag, Titulo } from "./styles";

import DetalhesClass from '../../models/Detalhes'

type Props = DetalhesClass


export const Detalhes = ({ descricao, prioridade, status, titulo, id }: Props) => {
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