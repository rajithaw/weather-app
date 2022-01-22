import styled from "styled-components";

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default WidgetContainer;
