import { BarraLateral } from "./containers/BarraLateral"
import { Lista } from "./containers/Lista"
import { Container, EstiloGlobal } from "./styles"


function App() {

  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <Lista />
      </Container>

    </>
  )
}

export default App
