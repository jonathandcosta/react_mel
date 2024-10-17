import styled, { createGlobalStyle } from 'styled-components';

export const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 414px auto;
`;
