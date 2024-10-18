import { Detalhes } from "../../components/Detalhes";
import { Container } from "./styles";

const situacao = [
  {
    titulo: "Chagou 1",
    prioridade: 'mensalista',
    status: 'Time Amarelo',
    descricao: 'tudo certo'
  },
  {
    titulo: "Chagou 2",
    prioridade: 'diarista',
    status: 'Time Laranja',
    descricao: 'Faltou sabado passado'
  },
  {
    titulo: "Chagou 3",
    prioridade: 'mensalista',
    status: 'Time Azul',
    descricao: 'Tudo certo'
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