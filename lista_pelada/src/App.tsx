import { Provider } from "react-redux"
import { Container, EstiloGlobal } from "./styles"
import store from "./store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"


const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastrar',
    element: <h1>Cadastro novo</h1>
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
