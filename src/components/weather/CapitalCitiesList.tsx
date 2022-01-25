import { useState } from 'react';
import List from '../layout/List';
import ListItem from '../layout/ListItem';
import ListItemAction from '../layout/ListItemAction';

interface IProps {
  cities: string[];
  selectedCity: string;
  onClick: (city: string) => void;
}

const CapitalCitiesList = ({ cities, selectedCity, onClick }: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (city: string) => {
    onClick(city);
    setIsExpanded(!isExpanded);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <List>
      {cities.map((city, index) => (
        <ListItem
          key={index}
          selected={city === selectedCity}
          isExpanded={isExpanded}
          onClick={() => {
            handleClick(city);
          }}
        >
          {city}
        </ListItem>
      ))}
      <ListItemAction
        isExpanded={isExpanded}
        onClick={() => {
          handleExpand();
        }}
      />
    </List>
  );
};

export default CapitalCitiesList;
