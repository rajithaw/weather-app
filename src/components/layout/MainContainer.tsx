import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default MainContainer;
