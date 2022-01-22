import Widget from "../layout/Widget"
import WidgetTile from "../layout/WidgetTile";

interface IProps {
	pressure: number;
	humidity: number;
}

const PressureWidget = ({ pressure, humidity }: IProps) => {

  return (
    <Widget flexDirection="column" alignItems="flex-start">
			<WidgetTile>Pressure: {pressure}</WidgetTile>
			<WidgetTile>Humidity: {humidity}</WidgetTile>
    </Widget>
  );
};

export default PressureWidget;
