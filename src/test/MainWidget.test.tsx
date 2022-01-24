import { render, screen } from '@testing-library/react';
import MainWidget from '../components/weather/MainWidget';

test('should render whether icon', () => {
  render(<MainWidget icon="test_icon" main="test main text" description="test description" temperature={35.5} />);
  
  const iconElement = screen.getByAltText(/test main text/) as HTMLImageElement;
  
  expect(iconElement).toBeInTheDocument();
  expect(iconElement.src).toBe("https://openweathermap.org/img/w/test_icon.png");
});

test('should render whether data', () => {
  render(<MainWidget icon="test_icon" main="test main text" description="test description" temperature={35.5} />);
  
  const descriptionElement = screen.getByText(/test description/);
  const temperatureElement = screen.getByText(/35.5°C/);
  
  expect(descriptionElement).toBeInTheDocument();
  expect(temperatureElement).toBeInTheDocument();
});