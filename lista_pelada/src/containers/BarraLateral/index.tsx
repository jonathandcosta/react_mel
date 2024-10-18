import { FiltroCard } from "../../components/FiltroCard";
import { Aside, Busca, Filtros, Logo } from "./styles";
import logo from '../../assets/img/mel_logo 1.jpg'

export const BarraLateral = () => (
  <Aside>
    <Logo>
      <img src={logo} alt="" />
    </Logo>
    <div>
      <Busca type="text" placeholder="Procurar" />
      <Filtros>
        <FiltroCard legenda='mensalistas' contadorNumber={1} />
        <FiltroCard legenda='diaristas' contadorNumber={2} />
        <FiltroCard legenda='amarelo' contadorNumber={4} />
        <FiltroCard legenda='azul' contadorNumber={5} />
        <FiltroCard legenda='laranja' contadorNumber={5} />
        <FiltroCard legenda='geral' contadorNumber={10} ativo />
      </Filtros>
    </div>
  </Aside>
)