import Widget from "../layout/Widget"
import WidgetLabel from "../layout/WidgetLabel";
import WidgetText from "../layout/WidgetText";
import WidgetTile from "../layout/WidgetTile";
import WidgetTitle from "../layout/WidgetTitle";

interface IProps {
	visibility: number;
	clouds: number;
}

const VisibilityWidget = ({ visibility, clouds }: IProps) => {

  return (
    <Widget flexDirection="column" alignItems="flex-start">
      <WidgetTitle>Visibility</WidgetTitle>
      <WidgetTile>
        <WidgetLabel>Clouds: </WidgetLabel>
        <WidgetText>{clouds}%</WidgetText>
      </WidgetTile>
			<WidgetTile>
        <WidgetLabel>Visibility: </WidgetLabel>
        <WidgetText>{visibility}</WidgetText>
      </WidgetTile>
    </Widget>
  );
};

export default VisibilityWidget;
