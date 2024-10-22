import { Provider } from "react-redux"
import { BarraLateral } from "./containers/BarraLateral"
import { Lista } from "./containers/Lista"
import { Container, EstiloGlobal } from "./styles"
import store from "./store"


function App() {

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <Lista />
      </Container>
    </Provider>

  )
}

export default App
