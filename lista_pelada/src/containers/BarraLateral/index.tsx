import { FiltroCard } from "../../components/FiltroCard";
import { Aside, Filtros } from "./styles";

export const BarraLateral = () => (
  <Aside>
    <div>
      <input type="text" placeholder="Procurar" />
      <Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
      </Filtros>
    </div>
  </Aside>
)