import styled from 'styled-components';

interface IWidgetTileProps {
  readonly justifyContent?: string;
  readonly alignItems?: string;
}

const WidgetTile = styled.span<IWidgetTileProps>`
  display: flex;
  flex-grow: 1;
  flex-basis: 50%;
  flex-direction: row;
  font-size: 1.2em;
  font-weight: 400;
  padding: 0.5em;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'center'};
  @media (max-width: 1024px) {
    flex-basis: auto;
  }
`;

export default WidgetTile;
