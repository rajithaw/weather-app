import Widget from "../layout/Widget"
import WidgetLabel from "../layout/WidgetLabel";
import WidgetText from "../layout/WidgetText";
import WidgetTile from "../layout/WidgetTile";
import WidgetTitle from "../layout/WidgetTitle";

interface IProps {
	feelsLike: number;
	temperatureMin: number;
	temperatureMax: number;
}

const TempreatureWidget = ({ feelsLike, temperatureMin, temperatureMax }: IProps) => {

  return (
    <Widget flexDirection="column" alignItems="flex-start">
			<WidgetTitle>Temperature</WidgetTitle>
			<WidgetTile>
				<WidgetLabel>Feels Like: </WidgetLabel>
				<WidgetText>{feelsLike}°C</WidgetText>
			</WidgetTile>
			<WidgetTile>
				<WidgetLabel>Min: </WidgetLabel>
				<WidgetText>{temperatureMin}°C</WidgetText>
			</WidgetTile>
			<WidgetTile>
				<WidgetLabel>Max: </WidgetLabel>
				<WidgetText>{temperatureMax}°C</WidgetText>
			</WidgetTile>
    </Widget>
  );
};

export default TempreatureWidget;
