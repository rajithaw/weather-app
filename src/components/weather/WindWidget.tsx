import Widget from "../layout/Widget"
import WidgetTile from "../layout/WidgetTile";

interface IProps {
	windSpeed: number;
	windDegrees: number;
	windGust: number;
}

const WindWidget = ({ windSpeed, windDegrees, windGust }: IProps) => {

  return (
    <Widget flexDirection="column" alignItems="flex-start">
			<WidgetTile>Wind Speed: {windSpeed}</WidgetTile>
			<WidgetTile>Wind Degrees: {windDegrees}</WidgetTile>
			<WidgetTile>Wind Gust: {windGust}</WidgetTile>
    </Widget>
  );
};

export default WindWidget;
