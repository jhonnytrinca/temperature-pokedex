import React, { useEffect, useState } from 'react';
import * as S from './PokeInfo.styles'
import { usePokemon } from '../../../hooks';


const OtherPokemons = ({pokemons, textDecor, type}) => {
  const { isLoading, getCarousel, carousel } = usePokemon();

  useEffect(() => {
    const random = pokemons.sort(() => .5 - Math.random()).slice(0, 10)
    getCarousel(random)
  }, [pokemons, getCarousel])

  return <>
  {isLoading ? '' : (
    <>
    <S.OthersTitle>Outros Pokémons que também estão aparecendo:</S.OthersTitle>
  <S.OtherPokemonsWrapper>
  {carousel.map((item) => <S.OtherContainer><S.OtherPhoto src={item.sprites.other['official-artwork'].front_default} alt='pokemon' /><S.OtherText sx={{ color: `types.${type}.main` }}>{item.name}</S.OtherText></S.OtherContainer>)}
  </S.OtherPokemonsWrapper> </>
  )} 
  </>;
};

export default OtherPokemons;
