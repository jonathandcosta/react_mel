import { useDispatch, useSelector } from "react-redux";
import { alteraFiltro } from "../../store/reducers/filtro";
import { Card, Label, Number } from "./styles";
import * as enums from '../../utils/enums/Detalhes'
import { RootReducer } from "../../store";

export type Props = {
  legenda: string
  criterio: "prioridade" | "status" | "todas"
  valor?: enums.Prioridade | enums.Status
}

export const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, detalhes } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }
  const ativo = verificaEstaAtivo()

  const contarNalista = () => {
    if (criterio === 'todas') return detalhes.situacao.length
    if (criterio === 'prioridade') {
      return detalhes.situacao.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return detalhes.situacao.filter((item) => item.status === valor).length
    }
  }
  const contador = contarNalista()

  const filtrar = () => {
    dispatch(alteraFiltro({
      criterio: criterio,
      valor
    }))
  }

  return (
    <Card ativo={ativo} onClick={filtrar}>
      <Number>{contador}</Number>
      <Label>{legenda}</Label>
    </Card>
  )
}