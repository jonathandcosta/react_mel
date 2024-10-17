import { Card, Label, Number } from "./styles";

export type Props = {
  ativo?: boolean
}

export const FiltroCard = (props: Props) => (
  <Card ativo={props.ativo}>
    <Number>3</Number>
    <Label>Mensalistas</Label>
  </Card>
)