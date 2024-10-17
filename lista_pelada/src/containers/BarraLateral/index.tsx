import { FiltroCard } from "../../components/FiltroCard";
import { Aside, Busca, Filtros } from "./styles";

export const BarraLateral = () => (
  <Aside>
    <div>
      <Busca type="text" placeholder="Procurar" />
      <Filtros>
        <FiltroCard legenda='mensalistas' contadorNumber={1} />
        <FiltroCard legenda='diaristas' contadorNumber={2} />
        <FiltroCard legenda='atrasado' contadorNumber={3} />
        <FiltroCard legenda='amarelo' contadorNumber={4} />
        <FiltroCard legenda='azul' contadorNumber={5} />
        <FiltroCard legenda='geral' contadorNumber={10} ativo />
      </Filtros>
    </div>
  </Aside>
)