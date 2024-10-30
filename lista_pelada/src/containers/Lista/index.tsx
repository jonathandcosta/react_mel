import { useSelector } from "react-redux";
import { Detalhes } from "../../components/Detalhes";
import { MainContainer, Titulo } from "../../styles";

import { RootReducer } from "../../store";

export const Lista = () => {
  const { situacao } = useSelector((state: RootReducer) => state.detalhes)
  const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtraLista = () => {
    let listasFiltradas = situacao

    if (termo !== undefined) {
      listasFiltradas = listasFiltradas.filter(
        item => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        listasFiltradas = listasFiltradas.filter(
          item => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        listasFiltradas = listasFiltradas.filter(
          item => item.status === valor
        )
      }
      return listasFiltradas
    } else {
      return situacao
    }
  }
  const listas = filtraLista()

  const exibeResultadoFiltragem = (quantidade: number) => {
    let msg = ''

    if (criterio === 'todas') {
      msg = `${quantidade} atleta(s) localizado, na soma total dos atletas.`
    } else {
      msg = `${quantidade} atleta(s) encontrado como: ${`${valor}`}`
    }
    return msg
  }
  const mensagem = exibeResultadoFiltragem(listas.length)

  return (
    <MainContainer>
      <Titulo>Pequisa específica por: {termo}</Titulo>
      <Titulo>{mensagem}</Titulo>
      <ul>
        {listas.map((s) => (
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
    </MainContainer>
  )
}