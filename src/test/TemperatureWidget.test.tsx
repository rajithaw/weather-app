import { render, screen } from '@testing-library/react';
import TempreatureWidget from '../components/weather/TempreatureWidget';

test('renders temperature data', () => {
  render(<TempreatureWidget feelsLike={30.2} temperatureMin={28.5} temperatureMax={33.6} />);
  
  const feelsLikeElement = screen.getByText(/30.2°C/);
  const minElement = screen.getByText(/28.5°C/);
  const maxElement = screen.getByText(/33.6°C/);

  expect(feelsLikeElement).toBeInTheDocument();
  expect(minElement).toBeInTheDocument();
  expect(maxElement).toBeInTheDocument();
});
