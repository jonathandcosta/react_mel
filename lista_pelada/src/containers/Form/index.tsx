import { BotaoSalvar, Input, MainContainer, Titulo } from "../../styles"
import { Form, Opcao, Opcoes } from "./styles"

const Formulario = () => {
  return (
    <MainContainer>
      <Titulo>Novo Atleta</Titulo>
      <Form action="">
        <Input type="text" placeholder="Nome do Atleta" />
        <Input as='textarea' name="" id="" placeholder="Informaçõs do Atleta"></Input>
        <Opcoes>
          <Opcao>
            <p>Prioridade</p>
            <input type="radio" name="mensalistas" id="mensalistas" /> <label htmlFor='mensalistas'>Mensalista</label>
            <input type="radio" name="diarista" id="diarista" /> <label htmlFor='diarista'>Diarista</label>
            <input type="radio" name="convidado" id="convidado" /> <label htmlFor="convidado">Convidado</label>
          </Opcao>
          <Opcao>
            <p>Status Time</p>
            <input type="radio" name="time azul" id="time azul" /> <label htmlFor="time azul">Time Azul</label>
            <input type="radio" name="time amarelo" id="time amarelo" /> <label htmlFor="time amarelo">Time Amarelo</label>
            <input type="radio" name="time laranja" id="time laranja" /> <label htmlFor="time laranja">Time Laranja</label>
          </Opcao>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar Atleta</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
