import { useDispatch, useSelector } from "react-redux";
import { alteraFiltro } from "../../store/reducers/filtro";
import { Card, Label, Number } from "./styles";
import * as enums from '../../utils/enums/Detalhes'
import { RootReducer } from "../../store";

export type Props = {
  contadorNumber: number
  legenda: string
  criterio: "prioridade" | "status" | "todas"
  valor?: enums.Prioridade | enums.Status
}

export const FiltroCard = ({ contadorNumber, legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const ativo = verificaEstaAtivo()



  const filtrar = () => {
    dispatch(alteraFiltro({
      criterio: criterio,
      valor
    }))
  }

  return (
    <Card ativo={ativo} onClick={filtrar}>
      <Number>{contadorNumber}</Number>
      <Label>{legenda}</Label>
    </Card>
  )
}