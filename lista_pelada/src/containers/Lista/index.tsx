import { useSelector } from "react-redux";
import { Detalhes } from "../../components/Detalhes";
import { Container } from "./styles";

import { RootReducer } from "../../store";

export const Lista = () => {
  const { situacao } = useSelector((state: RootReducer) => state.detalhes)
  const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtraLista = () => {
    let tarefasFiltradas = situacao

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        item => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          item => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          item => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return situacao
    }
  }


  return (
    <Container>
      <p>Total de peladeiros: 2 Mensalistas e 5 Diaristas</p>
      <p>Pequisou por; {termo}</p>
      <p>{criterio}</p>
      <p>{valor}</p>

      <ul>
        {filtraLista().map((s) => (
          <li key={s.titulo}>
            <Detalhes
              id={s.id}
              titulo={s.titulo}
              prioridade={s.prioridade}
              status={s.status}
              descricao={s.descricao} />
          </li>
        ))}

      </ul>
    </Container>
  )
}