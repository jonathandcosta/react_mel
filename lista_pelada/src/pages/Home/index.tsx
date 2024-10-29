import BotaoAdd from "../../components/BotaoAdd"
import { BarraLateral } from "../../containers/BarraLateral"
import { Lista } from "../../containers/Lista"

const Home = () => {
  return (
    <>
      <BarraLateral />
      <Lista />
      <BotaoAdd />
    </>
  )
}

export default Home
