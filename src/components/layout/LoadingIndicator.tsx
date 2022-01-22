import styled from "styled-components";
import { Oval } from "react-loader-spinner";

const LoadingIndicatorContainer = styled.div`
  position: absolute;
  width: 100%;
	height: 100%;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoadingIndicator = () => {
	return (
		<LoadingIndicatorContainer>
			<Oval
				height={100}
				width={100}
				strokeWidth={3}
				color="#e3710a"
				secondaryColor="#ffffff"
			/>
		</LoadingIndicatorContainer>
	)
}

export default LoadingIndicator;
