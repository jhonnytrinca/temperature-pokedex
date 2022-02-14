import React, { useEffect } from 'react';
import Temperature from './Temperature/Temperature';
import PokeInfo from './PokeInfo/PokeInfo';
import * as S from './PokemonInfo.styles';
import usePokemon from '../../hooks/usePokemon.jsx';

const PokemonInfo = ({ temp, city, weather }) => {
  const { isLoading, getPokemon, pokemons, type  } = usePokemon();

  useEffect(() => {
    const pokeWeather = pokemonType(temp);
    getPokemon(pokeWeather);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp]);

  const pokemonType = (temp) => {
    if (weather.main === 'Rain') {
      return 3;
    } else if (temp < 5) {
      return 15;
    } else if (temp >= 5 && temp <= 10) {
      return 11;
    } else if (temp >= 12 && temp < 15) {
      return 12;
    } else if (temp >= 15 && temp <= 21) {
      return 5;
    } else if (temp >= 23 && temp < 27) {
      return 7;
    } else if (temp >= 27 && temp <= 33) {
      return 6;
    } else if (temp > 33) {
      return 10;
    } else {
      return 1;
    }
  };

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <S.Container>
          <Temperature temp={temp} city={city} weather={weather} />
          <PokeInfo pokemons={pokemons} type={type} />
        </S.Container>
      )}
    </>
  );
};

export default PokemonInfo;
