import { Detalhes } from "../../components/Detalhes";
import { Container } from "./styles";

const situacao = [
  {
    titulo: "Ordem de Chegada 1",
    prioridade: 'Mensalistas',
    status: 'Amarelo',
    descricao: 'tudo certo'
  },
  {
    titulo: "Ordem de Chegada 2",
    prioridade: 'Diarista',
    status: 'Laranja',
    descricao: 'Faltou sabado passado'
  },
  {
    titulo: "Ordem de Chegada 3",
    prioridade: 'Mensalistas',
    status: 'Azul',
    descricao: 'Tudo certo'
  },
  {
    titulo: "Ordem de Chegada 4",
    prioridade: 'Convidado',
    status: 'Laranja',
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