import Widget from "../layout/Widget"
import WidgetTile from "../layout/WidgetTile";

interface IProps {
	feelsLike: number;
	temperatureMin: number;
	temperatureMax: number;
}

const TempreatureWidget = ({ feelsLike, temperatureMin, temperatureMax }: IProps) => {

  return (
    <Widget flexDirection="column" alignItems="flex-start">
			<WidgetTile>Feels Like: {feelsLike} C°</WidgetTile>
			<WidgetTile>Min: {temperatureMin} C°</WidgetTile>
			<WidgetTile>Max: {temperatureMax} C°</WidgetTile>
    </Widget>
  );
};

export default TempreatureWidget;
