import { OpenWeatherApiKey } from '../Constants';
import WeatherService from '../services/WeatherService';

describe('weather service', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call open weather service', async () => {
    const cityName = 'test_city';
    const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},au&units=metric&appid=${OpenWeatherApiKey}`;
    const testResponse = {
      test: 'test response',
    };

    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(testResponse),
    } as any);

    const response = await WeatherService.getWeatherByCity(cityName);

    expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(testResponse);
  });

  it('should return error on api error', async () => {
    const cityName = 'test_city';
    const errorResponse = {
      cod: 111,
      message: 'Error occured',
    };
    let actualError = '';

    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: false,
      json: () => Promise.resolve(errorResponse),
    } as any);

    await WeatherService.getWeatherByCity(cityName).catch((error) => {
      actualError = error;
    });

    expect(actualError).toEqual('111: Error occured');
  });

  it('should return error on network error', async () => {
    const cityName = 'test_city';
    const errorResponse = '404: Error occured';
    let actualError = '';

    jest.spyOn(global, 'fetch').mockRejectedValue(errorResponse);

    await WeatherService.getWeatherByCity(cityName).catch((error) => {
      actualError = error;
    });

    expect(actualError).toEqual('404: Error occured');
  });
});
