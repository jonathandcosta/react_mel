import { useSelector } from "react-redux";
import { Detalhes } from "../../components/Detalhes";
import { Container } from "./styles";

import { RootReducer } from "../../store";

export const Lista = () => {
  const { situacao } = useSelector((state: RootReducer) => state.detalhes)

  return (
    <Container>
      <p>Total de peladeiros: 2 Mensalistas e 5 Diaristas</p>
      <ul>
        {situacao.map((s) => (
          <li key={s.titulo}>
            <Detalhes id={s.id} titulo={s.titulo} prioridade={s.prioridade} status={s.status} descricao={s.descricao} />
          </li>
        ))}

      </ul>
    </Container>
  )
}