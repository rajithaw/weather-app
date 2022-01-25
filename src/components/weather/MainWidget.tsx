import Widget from '../layout/Widget';
import WidgetImage from '../layout/WidgetImage';
import WidgetText from '../layout/WidgetText';
import WidgetTile from '../layout/WidgetTile';

interface IProps {
  icon: string;
  main: string;
  description: string;
  temperature: number;
}

const MainWidget = ({ icon, main, description, temperature }: IProps) => {
  return (
    <Widget>
      <WidgetTile>
        <WidgetImage
          src={`https://openweathermap.org/img/w/${icon}.png`}
          alt={main}
        />
        <WidgetText capitalize>{description}</WidgetText>
      </WidgetTile>
      <WidgetTile>
        <WidgetText>{temperature}°C</WidgetText>
      </WidgetTile>
    </Widget>
  );
};

export default MainWidget;
