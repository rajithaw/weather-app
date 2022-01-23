import { render, screen } from '@testing-library/react';
import CitiWeather from '../components/weather/CitiWeather';
import { IWeather } from '../stores/WeatherStore';

test('renders all weather data', () => {

	const weather: IWeather = {
		main: "test main text",
		description: "test description",
		icon: "test_icon",
		temperature: 23.8,
		feelsLike: 22,
		temperatureMin: 18.1,
		temperatureMax: 25.6,
		pressure: 1012,
		humidity: 70,
		visibility: 4500,
		windSpeed: 1.25,
		windDegrees: 40,
		windGust: 3.3,
		clouds: 50
	};

  render(<CitiWeather weather={weather} />);
  
	const iconElement = screen.getByAltText(/test main text/) as HTMLImageElement;
  const descriptionElement = screen.getByText(/test description/);
  const temperatureElement = screen.getByText(/23.8°C/);
	const feelsLikeElement = screen.getByText(/22°C/);
  const minElement = screen.getByText(/18.1°C/);
  const maxElement = screen.getByText(/25.6°C/);
  const pressureElement = screen.getByText(/1012 hPa/);
  const humidityElement = screen.getByText(/70%/);
	const speedElement = screen.getByText(/1.25 km\/h/);
  const degreesElement = screen.getByText(/40°/);
  const gustElement = screen.getByText(/3.3 km\/h/);
  const visibilityElement = screen.getByText(/4500/);
  const cloudsElement = screen.getByText(/50%/);

	expect(iconElement).toBeInTheDocument();
  expect(iconElement.src).toBe("https://openweathermap.org/img/w/test_icon.png");
	expect(descriptionElement).toBeInTheDocument();
  expect(temperatureElement).toBeInTheDocument();
	expect(feelsLikeElement).toBeInTheDocument();
  expect(minElement).toBeInTheDocument();
  expect(maxElement).toBeInTheDocument();
  expect(pressureElement).toBeInTheDocument();
  expect(humidityElement).toBeInTheDocument();
	expect(speedElement).toBeInTheDocument();
  expect(degreesElement).toBeInTheDocument();
  expect(gustElement).toBeInTheDocument();
  expect(visibilityElement).toBeInTheDocument();
  expect(cloudsElement).toBeInTheDocument();
});
