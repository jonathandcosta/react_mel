import { useSelector } from "react-redux";
import { Detalhes } from "../../components/Detalhes";
import { Container } from "./styles";

import { RootReducer } from "../../store";

export const Lista = () => {
  const { situacao } = useSelector((state: RootReducer) => state.detalhes)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraLista = () => {
    return situacao.filter(
      item => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0)
  }


  return (
    <Container>
      <p>Total de peladeiros: 2 Mensalistas e 5 Diaristas, Pequisou por {termo}</p>
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