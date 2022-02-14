import { useCallback, useState } from 'react';
import { AddressService } from '../services';

const useTemperature = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [climate, setClimate] = useState({city: '', temp: '', weather: '', wind: ''})

  const getTemperature = useCallback(async (address) => {
    await AddressService.getCity(address)
      .then((res) => {
        const { weather, main, name, wind } = res.data;   
        setClimate({
          city: name,
          temp: main.temp,
          weather: weather,
          wind: wind
        })
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, getTemperature, climate };
};

export default useTemperature;
