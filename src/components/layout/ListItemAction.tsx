import styled from 'styled-components';
import expandImage from '../../images/expand.svg';
import collapseImage from '../../images/collapse.svg';

interface IListItemActionProps {
  readonly isExpanded: boolean;
}

const ListItemAction = styled.span<IListItemActionProps>`
  display: none;
  top: 0;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  margin: 1rem;
  background-image: url(${(props) =>
    props.isExpanded ? collapseImage : expandImage});
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  @media (max-width: 1024px) {
    display: block;
    position: absolute;
  }
`;

export default ListItemAction;
