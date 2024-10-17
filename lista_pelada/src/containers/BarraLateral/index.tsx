import { FiltroCard } from "../../components/FiltroCard";
import { Aside, Busca, Filtros } from "./styles";

export const BarraLateral = () => (
  <Aside>
    <div>
      <Busca type="text" placeholder="Procurar" />
      <Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </Filtros>
    </div>
  </Aside>
)