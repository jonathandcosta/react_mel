import { Detalhes } from "../../components/Detalhes";
import { Container } from "./styles";
import * as enums from '../../utils/enums/Detalhes';

const situacao = [
  {
    titulo: "Ordem de Chegada 1",
    prioridade: enums.Prioridade.MENSALISTAS,
    status: enums.Status.AMARELO,
    descricao: 'tudo certo'
  },
  {
    titulo: "Ordem de Chegada 2",
    prioridade: enums.Prioridade.DIARISTA,
    status: enums.Status.LARANJA,
    descricao: 'Faltou sabado passado'
  },
  {
    titulo: "Ordem de Chegada 3",
    prioridade: enums.Prioridade.MENSALISTAS,
    status: enums.Status.AZUL,
    descricao: 'Tudo certo'
  },
  {
    titulo: "Ordem de Chegada 4",
    prioridade: enums.Prioridade.CONVIDADO,
    status: enums.Status.LARANJA,
    descricao: 'Convidado por Freire'
  },
]

export const Lista = () => (
  <Container>
    <p>Total de peladeiros: 2 Mensalistas e 5 Diaristas</p>
    <ul>
      {situacao.map((s) => (
        <li key={s.titulo}>
          <Detalhes titulo={s.titulo} prioridade={s.prioridade} status={s.status} descricao={s.descricao} />
        </li>
      ))}

    </ul>
  </Container>
)