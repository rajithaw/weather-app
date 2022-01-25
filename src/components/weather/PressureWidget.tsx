import Widget from '../layout/Widget';
import WidgetLabel from '../layout/WidgetLabel';
import WidgetText from '../layout/WidgetText';
import WidgetTile from '../layout/WidgetTile';
import WidgetTitle from '../layout/WidgetTitle';

interface IProps {
  pressure: number;
  humidity: number;
}

const PressureWidget = ({ pressure, humidity }: IProps) => {
  return (
    <Widget flexDirection="column" alignItems="flex-start">
      <WidgetTitle>Pressure</WidgetTitle>
      <WidgetTile>
        <WidgetLabel>Pressure: </WidgetLabel>
        <WidgetText>{pressure} hPa</WidgetText>
      </WidgetTile>
      <WidgetTile>
        <WidgetLabel>Humidity: </WidgetLabel>
        <WidgetText>{humidity}%</WidgetText>
      </WidgetTile>
    </Widget>
  );
};

export default PressureWidget;
