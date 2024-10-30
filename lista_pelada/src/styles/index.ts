import styled, { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';
import { Botao } from '../components/Detalhes/styles';

export const breakpoints = {
  tablet: '40rem',
};

export const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  list-style: none;
}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
  background-color: #d4d4d4;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 90vh;
`;

export const Titulo = styled.p`
  display: block;
  margin: 20px 0px 20px 0px;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
`;

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`;
