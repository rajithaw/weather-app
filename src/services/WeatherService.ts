import { OpenWeatherApiKey } from '../Constants';

class WeatherService {
	getWeatherByCity = (city: string) => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},au&units=metric&appid=${OpenWeatherApiKey}`;
		
		return fetch(url)
			.then(response => {
				if(response.ok) {
					return response.json();
				}
				else{
					return Promise.resolve(response.json())
						.then(error => {
							return Promise.reject(`${error.cod}: ${error.message}`);
						});
				}
			})
			.catch(error => {
				return Promise.reject(error.toString());
			});
	}
}

const weatherService = new WeatherService();

export default weatherService;