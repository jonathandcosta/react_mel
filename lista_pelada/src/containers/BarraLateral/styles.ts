import styled from 'styled-components';

export const Aside = styled.aside`
  background-color: #eee;
  height: 100vh;
  padding: 26px;
`;

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`;

export const Busca = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
`;
