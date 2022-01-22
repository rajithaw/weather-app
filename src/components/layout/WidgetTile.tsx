import styled from "styled-components";

interface IWidgetTileProps {
  readonly justifyContent?: string;
	readonly alignItems?: string;
}

const WidgetTile = styled.span<IWidgetTileProps>`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
	font-size: 1.5em;
	font-weight: 400;
	padding: 0.5em;
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "center"};
`;

export default WidgetTile;