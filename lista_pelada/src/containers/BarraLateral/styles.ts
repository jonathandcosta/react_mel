import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
  margin-bottom: 32px;

  > img {
    width: 250px;
    border-radius: 80px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      width: 150px;
    }
  }
`;

export const Aside = styled.aside`
  background-color: #eee;
  height: 100vh;
  padding: 26px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 80vh;
  }
`;

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`;
