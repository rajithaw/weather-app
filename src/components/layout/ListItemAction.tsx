import styled from "styled-components";
import expandImage from "../../images/expand.svg";
import collapseImage from "../../images/collapse.svg";

interface IListItemActionProps {
    readonly isExpanded: boolean;
  }

const ListItemAction = styled.span<IListItemActionProps>`
  display: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 1rem;
  background-image: url(${props => props.isExpanded ? collapseImage : expandImage});
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
  }
`;

export default ListItemAction;