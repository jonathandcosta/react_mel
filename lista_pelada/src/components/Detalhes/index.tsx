import { useState } from "react";
import { Acoes, Botao, Card, Descricao, Tag, Titulo } from "./styles";

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
      <Tag>{prioridade}</Tag>
      <Tag>{status}</Tag>
      <Descricao value={descricao} />
      <Acoes>
        {estaEditando ? (
          <>
            <Botao>Salvar</Botao>
            <Botao onClick={() => setEstaEditando(false)}>Cancelar</Botao>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <Botao>Remover</Botao>
          </>
        )}
      </Acoes>
    </Card>
  )
}