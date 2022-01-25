import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import CapitalCitiesList from '../components/weather/CapitalCitiesList';

describe('capital cities list', ()=> {
  it('should render city names', () => {
    const cityNames = ['test city 1', 'test city 2', 'test city 3'];
    const selectedCity = cityNames[1];
  
    render(
      <CapitalCitiesList
        cities={cityNames}
        selectedCity={selectedCity}
        onClick={() => {}}
      />
    );
  
    const name1Element = screen.getByText(/test city 1/);
    const name2Element = screen.getByText(/test city 2/);
    const name3Element = screen.getByText(/test city 3/);
  
    expect(name1Element).toBeInTheDocument();
    expect(name2Element).toBeInTheDocument();
    expect(name3Element).toBeInTheDocument();
  });
  
  it('should highlight selected city name', () => {
    const cityNames = ['test city 1', 'test city 2', 'test city 3'];
    const selectedCity = cityNames[1];
  
    render(
      <CapitalCitiesList
        cities={cityNames}
        selectedCity={selectedCity}
        onClick={() => {}}
      />
    );
  
    const selectedElement = screen.getByText(/test city 2/);
  
    expect(selectedElement).toHaveStyleRule('color', '#e3710a');
    expect(selectedElement).toHaveStyleRule('font-weight', 'bold');
  });
  
  it('should return selected city name when clicked', () => {
    const cityNames = ['test city 1', 'test city 2', 'test city 3'];
    const selectedCity = cityNames[1];
    const handleClick = jest.fn();
  
    render(
      <CapitalCitiesList
        cities={cityNames}
        selectedCity={selectedCity}
        onClick={handleClick}
      />
    );
  
    const cityToSelect = screen.getByText(/test city 3/);
    fireEvent.click(cityToSelect);
  
    expect(handleClick).toHaveBeenCalledWith('test city 3');
  });
  
  it('should expand/collapse in mobile when clicked', () => {
    const cityNames = ['test city 1', 'test city 2', 'test city 3'];
    const selectedCity = cityNames[1];
  
    render(
      <CapitalCitiesList
        cities={cityNames}
        selectedCity={selectedCity}
        onClick={() => {}}
      />
    );
  
    const selectedElement = screen.getByText(/test city 2/);
    const otherElement = screen.getByText(/test city 3/);
  
    // initially only the selected city will be visible
    expect(selectedElement).not.toHaveStyleRule('display', 'none', {
      media: '(max-width: 1024px)',
    });
    expect(otherElement).toHaveStyleRule('display', 'none', {
      media: '(max-width: 1024px)',
    });
  
    // click to expand
    fireEvent.click(selectedElement);
  
    // other cities should be visible
    expect(otherElement).not.toHaveStyleRule('display', 'none', {
      media: '(max-width: 1024px)',
    });
  
    // click to collapse
    fireEvent.click(selectedElement);
  
    // other cities should not be visible
    expect(otherElement).toHaveStyleRule('display', 'none', {
      media: '(max-width: 1024px)',
    });
  });
});
