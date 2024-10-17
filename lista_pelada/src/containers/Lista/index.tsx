import { Detalhes } from "../../components/Detalhes";
import { Container } from "./styles";

export const Lista = () => (
  <Container>
    <p>Total de peladeiros: 2 Mensalistas e 5 Diaristas</p>
    <ul>
      <li>
        <Detalhes />
      </li>
      <li>
        <Detalhes />
      </li>
      <li>
        <Detalhes />
      </li>
      <li>
        <Detalhes />
      </li>
    </ul>
  </Container>
)