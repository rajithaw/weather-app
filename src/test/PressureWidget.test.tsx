import { render, screen } from '@testing-library/react';
import PressureWidget from '../components/weather/PressureWidget';

test('should render pressure data', () => {
  render(<PressureWidget pressure={1015} humidity={54.2} />);
  
  const pressureElement = screen.getByText(/1015 hPa/);
  const humidityElement = screen.getByText(/54.2%/);

  expect(pressureElement).toBeInTheDocument();
  expect(humidityElement).toBeInTheDocument();
});
