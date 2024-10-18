import styled, { createGlobalStyle } from 'styled-components';

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

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
