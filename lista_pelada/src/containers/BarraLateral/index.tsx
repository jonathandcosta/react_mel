import { FiltroCard } from "../../components/FiltroCard";
import logo from '../../assets/img/mel_logo 1.jpg'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { alteraTermo } from "../../store/reducers/filtro";
import { Aside, Busca, Filtros, Logo } from "./styles";
import * as enums from '../../utils/enums/Detalhes'

export const BarraLateral = () => {

  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <div>
        <Busca
          type="text"
          placeholder="Procurar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <Filtros>
          <FiltroCard
            valor={enums.Prioridade.MENSALISTAS}
            criterio='prioridade'
            legenda='mensalistas'
          />
          <FiltroCard
            valor={enums.Prioridade.DIARISTA}
            criterio='prioridade'
            legenda='diaristas'
          />
          <FiltroCard
            valor={enums.Status.AMARELO}
            criterio='status'
            legenda='time amarelo'
          />
          <FiltroCard
            valor={enums.Status.AZUL}
            criterio='status'
            legenda='time azul'
          />
          <FiltroCard
            valor={enums.Status.LARANJA}
            criterio='status'
            legenda='time laranja'
          />
          <FiltroCard
            valor={enums.Status.LARANJA}
            criterio='prioridade'
            legenda='convidado'
          />
          <FiltroCard
            criterio='todas'
            legenda='jogadores total'
          />
        </Filtros>
      </div>
    </Aside>
  )
}