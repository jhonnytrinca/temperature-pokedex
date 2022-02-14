import React, { useEffect } from 'react';
import * as S from './PokeInfo.styles'
import { usePokemon } from '../../../hooks';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const OtherPokemons = ({pokemons, textDecor, type}) => {
  const { isLoading, getCarousel, carousel } = usePokemon();

  useEffect(() => {
    const random = pokemons.sort(() => .5 - Math.random()).slice(0, 10)
    getCarousel(random)
  }, [pokemons, getCarousel])

  return <>
  {isLoading ? '' : (<>
    <S.OthersTitle className='otherTitle'>Outros Pokémons que também estão aparecendo:</S.OthersTitle>
  <S.Wrapper>
    <S.OtherPokemonsWrapper>
  {carousel.map((item) => <S.OtherContainer><S.OtherPhoto src={item.sprites.other['official-artwork'].front_default} alt='pokemon' /><S.OtherText className='otherList' sx={{ color: `types.${type}.main` }}>{item.name}</S.OtherText></S.OtherContainer>)}
    </S.OtherPokemonsWrapper> 
      <ArrowForwardIosIcon justifyContent='center'/>
    </S.Wrapper>
   </>
  )}
  </>;
};

export default OtherPokemons;
