import { render, screen } from '@testing-library/react';
import WindWidget from '../components/weather/WindWidget';

test('renders wind data', () => {
  render(<WindWidget windSpeed={5.23} windDegrees={70} windGust={9.2} />);
  
  const speedElement = screen.getByText(/5.23 km\/h/);
  const degreesElement = screen.getByText(/70°/);
  const gustElement = screen.getByText(/9.2 km\/h/);

  expect(speedElement).toBeInTheDocument();
  expect(degreesElement).toBeInTheDocument();
  expect(gustElement).toBeInTheDocument();
});
