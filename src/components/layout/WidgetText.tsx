import styled from "styled-components";

interface IWidgetTextProps {
	readonly capitalize?: boolean;
}

const WidgetText = styled.span<IWidgetTextProps>`
  padding: 0.5rem;
  font-weight: 600;
  text-transform: ${props => props.capitalize ? "capitalize" : "none"};
`;

export default WidgetText;
