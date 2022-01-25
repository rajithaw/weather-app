import { createContext, useContext } from 'react';
import WeatherStore from './WeatherStore';

export const storeContext = createContext({
  weatherStore: new WeatherStore(),
});

export const useStores = () => useContext(storeContext);
