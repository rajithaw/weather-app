import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import LoadingIndicator from "./components/layout/LoadingIndicator";

import MainContainer from './components/layout/MainContainer';
import MainMenu from './components/layout/Menu';
import Content from './components/layout/Content';
import CapitalCitiesList from './components/weather/CapitalCitiesList';
import { CapitalCities } from './Constants';
import { useStores } from "./stores/StoreContext";
import CitiWeather from "./components/weather/CitiWeather";

function App() {
  const { weatherStore } = useStores();
  const { selectedCity, selectedCityWeather, isLoading, setSelectedCity, getWeather } = weatherStore;

  useEffect(() => {
    //getWeather();
  });

  const handleCityClick = (city: string) => {
    console.log(city);
    setSelectedCity(city);
    // TODO: remove
    getWeather();
  };

  return (
    <MainContainer>
      <MainMenu>
        <CapitalCitiesList 
          cities={CapitalCities} 
          selectedCity={selectedCity} 
          onClick={handleCityClick} />
      </MainMenu>
      <Content>
        {
          isLoading &&
          <LoadingIndicator />
        }
        <CitiWeather 
          weather={selectedCityWeather}/>
      </Content>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </MainContainer>
  );
}

export default observer(App);
