import { useState } from "react";
import { Acoes, Botao, Card, Descricao, Tag, Titulo } from "./styles";

export const Detalhes = () => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <Card>
      <Titulo>detalhes do peladeiro</Titulo>
      <Tag>mensalista</Tag>
      <Tag>diarista</Tag>
      <Tag>amarelo</Tag>
      <Tag>azul</Tag>
      <Tag>assiduo</Tag>
      <Descricao>Essse atleta é assiduo</Descricao>
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