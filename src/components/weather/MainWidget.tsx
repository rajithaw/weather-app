import Widget from "../layout/Widget"
import WidgetTile from "../layout/WidgetTile";

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
				<img src={`https://openweathermap.org/img/w/${icon}.png`} alt={main} />
				<span>{description}</span>
			</WidgetTile>
			<WidgetTile>
				{temperature} C°
			</WidgetTile>
		</Widget>
  );
};

export default MainWidget;
