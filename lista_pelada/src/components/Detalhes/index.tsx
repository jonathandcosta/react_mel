import { Acoes, Botao, Card, Descricao, Tag, Titulo } from "./styles";

export const Detalhes = () => (
  <Card>
    <Titulo>detalhes do peladeiro</Titulo>
    <Tag>mensalista</Tag>
    <Tag>diarista</Tag>
    <Tag>amarelo</Tag>
    <Tag>azul</Tag>
    <Tag>assiduo</Tag>
    <Descricao>Essse atleta é assiduo</Descricao>
    <Acoes>
      <Botao>Editar</Botao>
      <Botao>Remover</Botao>
    </Acoes>
  </Card>
)