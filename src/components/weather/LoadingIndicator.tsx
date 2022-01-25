import { Oval } from 'react-loader-spinner';
import LoadingIndicatorContainer from '../layout/LoadingIndicatorContainer';

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
  );
};

export default LoadingIndicator;
