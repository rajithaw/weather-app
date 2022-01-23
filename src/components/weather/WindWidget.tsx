import Widget from "../layout/Widget"
import WidgetLabel from "../layout/WidgetLabel";
import WidgetText from "../layout/WidgetText";
import WidgetTile from "../layout/WidgetTile";
import WidgetTitle from "../layout/WidgetTitle";

interface IProps {
	windSpeed: number;
	windDegrees: number;
	windGust: number;
}

const WindWidget = ({ windSpeed, windDegrees, windGust }: IProps) => {

  return (
    <Widget flexDirection="column" alignItems="flex-start">
      <WidgetTitle>Wind</WidgetTitle>
			<WidgetTile>
				<WidgetLabel>Speed: </WidgetLabel>
				<WidgetText>{windSpeed} km/h</WidgetText>
			</WidgetTile>
			<WidgetTile>
				<WidgetLabel>Degrees: </WidgetLabel>
				<WidgetText>{windDegrees}°</WidgetText>
			</WidgetTile>
			<WidgetTile>
				<WidgetLabel>Gust: </WidgetLabel>
				<WidgetText>{windGust} km/h</WidgetText>
			</WidgetTile>
    </Widget>
  );
};

export default WindWidget;
