import { useState } from "react";
import { Acoes, Botao, BotaoCancelarRemover, BotaoSalvar, Card, Descricao, Tag, Titulo } from "./styles";

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

export const Detalhes = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Tag prioridade={prioridade}>{prioridade}</Tag>
      <Tag status={status}>{status}</Tag>
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