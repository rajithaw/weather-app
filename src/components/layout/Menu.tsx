import styled from 'styled-components';

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 17rem;
  border-right: 1px solid rgb(231, 235, 240);
  border-bottom: none;
  @media (max-width: 1024px) {
    width: unset;
    border-right: none;
    border-bottom: 1px solid rgb(231, 235, 240);
  }
`;

export default Menu;
