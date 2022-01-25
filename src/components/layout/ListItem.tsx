import styled from 'styled-components';

interface IListProps {
  readonly selected: boolean;
  readonly isExpanded: boolean;
}

const ListItem = styled.li<IListProps>`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#e3710a' : '#000000')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'inherit')};
  font-size: 1.2rem;
  &:hover {
    color: #e3710a;
  }
  @media (max-width: 1024px) {
    display: ${(props) =>
      props.isExpanded ? 'flex' : props.selected ? 'flex' : 'none'};
    font-size: 1.5rem;
  }
`;

export default ListItem;
