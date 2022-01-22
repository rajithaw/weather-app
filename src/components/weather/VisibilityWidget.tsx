import Widget from "../layout/Widget"
import WidgetTile from "../layout/WidgetTile";

interface IProps {
	visibility: number;
	clouds: number;
}

const VisibilityWidget = ({ visibility, clouds }: IProps) => {

  return (
    <Widget flexDirection="column" alignItems="flex-start">
			<WidgetTile>Visibility: {visibility}</WidgetTile>
			<WidgetTile>Clouds: {clouds}</WidgetTile>
    </Widget>
  );
};

export default VisibilityWidget;
