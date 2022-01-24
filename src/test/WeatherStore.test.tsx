import WeatherStore from '../stores/WeatherStore';
import WeatherService from '../services/WeatherService';

afterEach(() => {
	jest.restoreAllMocks();
});

test('should call open weather service', async () => {
	jest.spyOn(WeatherService, 'getWeatherByCity').mockResolvedValue(
		{
			weather: [{
				main: "weather main",
				description: "weather description",
				icon: "test_icon"
			}],
			main: {
				temp: 32,
				feels_like: 31,
				temp_min: 28,
				temp_max: 35,
				pressure: 1100,
				humidity: 40
			},
			visibility: 10000,
			wind: {
				speed: 3,
				deg: 120,
				gust: 5
			},
			clouds: {
				all: 70
			}
		}
	);

	const weatherStore = new WeatherStore();

	weatherStore.setSelectedCity('test city');
  await weatherStore.getWeather();
	
	expect(WeatherService.getWeatherByCity).toHaveBeenCalledWith('test city');
	expect(weatherStore.selectedCityWeather).toEqual({
		main: "weather main",
		description: "weather description",
		icon: "test_icon",
		temperature: 32,
		feelsLike: 31,
		temperatureMin: 28,
		temperatureMax: 35,
		pressure: 1100,
		humidity: 40,
		visibility: 10000,
		windSpeed: 3,
		windDegrees: 120,
		windGust: 5,
		clouds: 70
	});
});

test('should not set selected city weather on service error', async () => {
	jest.spyOn(WeatherService, 'getWeatherByCity').mockRejectedValue(
		{
			cod: 222,
			message: "Error occured"
		}
	);

	const weatherStore = new WeatherStore();

	weatherStore.setSelectedCity('test city');
  await weatherStore.getWeather();
	
	expect(WeatherService.getWeatherByCity).toHaveBeenCalledWith('test city');
	expect(weatherStore.selectedCityWeather).toEqual({});
});
