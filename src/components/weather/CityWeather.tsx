import { IWeather } from '../../stores/WeatherStore';
import WidgetContainer from '../layout/WidgetContainer';
import MainWidget from './MainWidget';
import PressureWidget from './PressureWidget';
import TempreatureWidget from './TempreatureWidget';
import VisibilityWidget from './VisibilityWidget';
import WindWidget from './WindWidget';

interface IProps {
  weather: IWeather;
}

const CityWeather = ({ weather }: IProps) => {
  return (
    <>
      <WidgetContainer>
        <MainWidget
          icon={weather.icon}
          main={weather.main}
          description={weather.description}
          temperature={weather.temperature}
        />
      </WidgetContainer>
      <WidgetContainer>
        <TempreatureWidget
          feelsLike={weather.feelsLike}
          temperatureMax={weather.temperatureMax}
          temperatureMin={weather.temperatureMin}
        />
        <PressureWidget
          pressure={weather.pressure}
          humidity={weather.humidity}
        />
      </WidgetContainer>
      <WidgetContainer>
        <WindWidget
          windSpeed={weather.windSpeed}
          windDegrees={weather.windDegrees}
          windGust={weather.windGust}
        />
        <VisibilityWidget
          visibility={weather.visibility}
          clouds={weather.clouds}
        />
      </WidgetContainer>
    </>
  );
};

export default CityWeather;
