import React, { useEffect, useState } from 'react';
import * as S from './PokeInfo.styles';
import { PokemonService } from '../../../services';
import OtherPokemons from './OtherPokemons';
import PokePhoto from './PokePhoto';
import { alpha } from '@material-ui/core';
import { usePokemon } from '../../../hooks';

const PokeInfo = ({ pokemons, type }) => {
  const { isLoading, getPhoto, photos } = usePokemon();
  const { pkm, ddf, ddt, ndf, allPokemon } = pokemons;


  useEffect(() => {
    const url = pkm.pokemon.url;
    getPhoto(url);
  }, [pkm.pokemon.url]);

  const textDecor = (item) => {
    return {
      span: { color: `types.${item}.main` },
      '&:hover::before': { bgcolor: `types.${type}.main` }
    };
  };

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <S.Container>
          <S.Box sx={{ bgcolor: `types.${type}.bg` }}>
            <S.MainPokemonBox>
              <PokePhoto photos={photos} name={pkm.pokemon.name} />
              <S.Text sx={textDecor(type)}>
                O tipo de Pokémon aparecendo na sua cidade é <span className='inlineText'>{type}</span>
              </S.Text>
              <S.Text sx={textDecor(type)}>
                O Pokémon com maiores chances de aparecer em sua cidade é o{' '}
                <span className='inlineText'>{pkm.pokemon.name}</span>
              </S.Text>
              {ddf.length > 0 ? (
                <S.Text sx={textDecor(type)}>
                  Para captura-lo, não esqueça de usar Pokémons dos tipos{' '}
                  {ddf.map((item, index) => (
                    <S.Text className='inlineText' sx={textDecor(item.name)} key={index}>
                      <span>{item.name}</span>
                    </S.Text>
                  ))}{' '}
                  pois são sua maior fraquesa!
                </S.Text>
              ) : (
                ''
              )}
              {ddt.length > 0 ? (
                <>
                  <S.Text sx={textDecor(type)}>
                    E não use Pokémons dos tipos{' '}
                    {ddt.map((item, index) => (
                      <S.Text className='inlineText' sx={textDecor(item.name)} key={index}>
                        <span>{item.name}</span>
                      </S.Text>
                    ))}{' '}
                    pois são sua resistência!
                  </S.Text>
                </>
              ) : (
                ''
              )}
              {ndf.length > 0 ? (
                <>
                  <S.Text sx={textDecor(type)}>
                    Nem pense em levar Pokémons dos tipos{' '}
                    {ndf.map((item, index) => (
                    <S.Text className='inlineText' sx={textDecor(item.name)} key={index}>
                       <span>{item.name}</span>
                      </S.Text>
                    ))}{' '}
                    pois seu dano ao tipo {type} é zero!
                  </S.Text>
                </>
              ) : (
                ''
              )}
              <S.ShinyContainer>
                <S.Text sx={textDecor(type)}>
                  Se você tiver muita sorte, pode até encontrar um pokémon
                  shiny!!{' '}
                </S.Text>
                <S.Shiny
                  src={photos.sprites.front_shiny}
                  alt={pkm.pokemon.name}
                />
              </S.ShinyContainer>
            </S.MainPokemonBox>
            <OtherPokemons pokemons={allPokemon} textDecor={textDecor} type={type} />
          </S.Box>
        </S.Container>
      )}
    </>
  );
};

export default PokeInfo;
