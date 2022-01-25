import styled from 'styled-components';

interface IWidgetProps {
  readonly flexDirection?: string;
  readonly alignItems?: string;
}

const Widget = styled.fieldset<IWidgetProps>`
  display: flex;
  flex-grow: 1;
  flex-basis: 50%;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  align-items: ${(props) => props.alignItems || 'center'};
  border: 1px solid rgb(231, 235, 240);
`;

export default Widget;
