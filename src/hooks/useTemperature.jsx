import { useCallback, useState } from 'react';
import { AddressService } from '../services';

const useTemperature = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWheather] = useState('');

  const getTemperature = useCallback(async (address) => {
    await AddressService.getCity(address)
      .then((res) => {
        const { weather, main, name } = res.data;

        setCity(name);
        setTemp(main.temp);
        setWheather(weather);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, getTemperature, temp, weather, city };
};

export default useTemperature;
