import { observable, action, runInAction, makeObservable } from 'mobx';
import { toast } from 'react-toastify';

import { CapitalCities, ApiErrorMessage } from '../Constants';
import WeatherService from '../services/WeatherService';

export interface IWeather {
  main: string;
  description: string;
  icon: string;
  temperature: number;
  feelsLike: number;
  temperatureMin: number;
  temperatureMax: number;
  pressure: number;
  humidity: number;
  visibility: number;
  windSpeed: number;
  windDegrees: number;
  windGust: number;
  clouds: number;
}

export interface IWeatherStore {
  selectedCity: string;
  selectedCityWeather: IWeather;
  isLoading: boolean;
  setSelectedCity(city: string): void;
  getWeather(): Promise<any>;
}

export default class WeatherStore implements IWeatherStore {
  constructor() {
    makeObservable(this);
  }

  @observable selectedCity: string = CapitalCities[0];
  @observable selectedCityWeather: IWeather = {} as IWeather;
  @observable isLoading: boolean = false;

  @action setSelectedCity = (city: string) => {
    this.selectedCity = city;
  };

  @action getWeather = () => {
    this.isLoading = true;

    return WeatherService.getWeatherByCity(this.selectedCity)
      .then((response) => {
        runInAction(() => {
          this.selectedCityWeather = {
            main: response.weather[0]?.main,
            description: response.weather[0]?.description,
            icon: response.weather[0]?.icon,
            temperature: response.main?.temp,
            feelsLike: response.main?.feels_like,
            temperatureMin: response?.main.temp_min,
            temperatureMax: response?.main.temp_max,
            pressure: response.main?.pressure,
            humidity: response.main?.humidity,
            visibility: response.visibility,
            windSpeed: response.wind?.speed,
            windDegrees: response.wind?.deg,
            windGust: response.wind?.gust,
            clouds: response.clouds?.all,
          };
        });
      })
      .catch((error) => {
        toast.error(`${ApiErrorMessage}	${error}`);
      })
      .finally(() => {
        runInAction(() => {
          this.isLoading = false;
        });
      });
  };
}
