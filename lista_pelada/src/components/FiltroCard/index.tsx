import { Card, Label, Number } from "./styles";

export type Props = {
  ativo?: boolean
  contadorNumber: number
  legenda: string
}

export const FiltroCard = ({ ativo, contadorNumber, legenda }: Props) => (
  <Card ativo={ativo}>
    <Number>{contadorNumber}</Number>
    <Label>{legenda}</Label>
  </Card>
)