import { Provider } from "react-redux"
import { Container, EstiloGlobal } from "./styles"
import store from "./store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro"


const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastrar',
    element: <Cadastro />
  }
])

function App() {

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>

  )
}

export default App
