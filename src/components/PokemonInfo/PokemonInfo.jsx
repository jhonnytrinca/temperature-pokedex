import React, { useEffect } from 'react';
import Temperature from './Temperature/Temperature';
import PokeInfo from './PokeInfo/PokeInfo';
import * as S from './PokemonInfo.styles';
import usePokemon from '../../hooks/usePokemon.jsx';

const PokemonInfo = ({ temp, city, weather, wind }) => {
  const { isLoading, getPokemon, pokemons, type  } = usePokemon();

  useEffect(() => {
    const pokeWeather = pokemonType(temp);
    getPokemon(pokeWeather);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp]);

  const pokemonType = (temp) => {
    var objDate = new Date();
    var hours = objDate.getHours()


    if (weather[0].main === 'Rain' && temp <= 20) {
      return 13; //electric
    } else if (weather[0].main === 'Rain' && temp >= 20) {
      return 16; // dragon
    } else if (wind.speed > 4 && weather[0].main !== 'Rain') {
      return 3; //flying
    } else if (hours >= 19 && weather[0].main === 'Clouds') {
      return 8; //ghost
    } else if (hours >= 19 && temp >= 0 && temp <= 5) {
      return 14; // psychic
    } else if (hours >= 19 && temp >= 23 && temp <= 26) {
      return 17; // dark
    } else if (hours <= 19 && temp >= 23 && temp <= 26) {
      return 7; // bug
    } else if (hours <= 8 && hours >= 19 && temp >= 23 && temp <= 26) {
      return 18; //fairy
    } else if (hours >= 19 && temp > 33) {
      return 9; // steel 
    } else if (temp < 5) {
      return 15; // ice
    } else if (temp >= 5 && temp <= 10) {
      return 11; // water
    } else if (temp >= 12 && temp < 15) {
      return 12; // grass
    } else if (temp >= 15 && temp <= 18) {
      return 5; // ground
    } else if (temp >= 18 && temp < 21) {
      return 4; // poison
    } else if (temp >= 27 && temp <= 30) {
      return 2; //fighting
    } else if (temp >= 30 && temp <= 33) {
      return 6; //rock
    } else if (temp > 33) {
      return 10; //fire
    } else {
      return 1; //normal
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
