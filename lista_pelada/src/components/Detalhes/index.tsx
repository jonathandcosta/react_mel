import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { remmover, editar } from "../../store/reducers/detalhes";

import { Acoes, Botao, BotaoCancelarRemover, BotaoSalvar, Card, Descricao, Tag, Titulo } from "./styles";

import DetalhesClass from '../../models/Detalhes'

type Props = DetalhesClass

export const Detalhes = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Tag parametro="prioridade" prioridade={prioridade}>{prioridade}</Tag>
      <Tag parametro="status" status={status}>{status}</Tag>
      <Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <Acoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={() => {
              dispatch(editar({
                descricao,
                prioridade,
                status,
                titulo,
                id
              })
              )
              setEstaEditando(false)
            }}
            >
              Salvar</BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>Cancelar</BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remmover(id))}>Remover</BotaoCancelarRemover>
          </>
        )}
      </Acoes>
    </Card>
  )
}