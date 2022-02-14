import React, { useEffect } from 'react';
import * as S from './PokeInfo.styles';
import OtherPokemons from './OtherPokemons';
import PokePhoto from './PokePhoto';
import { usePokemon } from '../../../hooks';

const PokeInfo = ({ pokemons, type }) => {
  const { isLoading, getPhoto, photos } = usePokemon();
  const { pkm, ddf, ddt, ndf, allPokemon } = pokemons;


  useEffect(() => {
    const url = pkm.pokemon.url;
    getPhoto(url);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pkm.pokemon.url]);

  const textDecor = (item) => {
    return {'&:hover::before': { bgcolor: `types.${type}.main` }};
  };

  const colorType = (item) => {
    return { color: `types.${item}.main` }
  }

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <S.Container>
          <S.Box sx={{ bgcolor: `types.${type}.bg` }}>
            <S.MainPokemonBox>
              <PokePhoto photos={photos} name={pkm.pokemon.name} />
              <S.Text className='listItem' sx={textDecor(type)}>
                O tipo de Pokémon aparecendo na sua cidade é <S.Text sx={colorType(type)} className='inlineText'>{type}</S.Text>
              </S.Text>
              <S.Text className='listItem' sx={textDecor(type)}>
                O Pokémon com maiores chances de aparecer em sua cidade é o{' '}
                <S.Text sx={colorType(type)} className='inlineText'>{pkm.pokemon.name}</S.Text>
              </S.Text>
              {ddf.length > 0 ? (
                <S.Text className='listItem' sx={textDecor(type)}>
                  Para captura-lo, não esqueça de usar Pokémons dos tipos{' '}
                  {ddf.map((item, index) => (
                    <S.Text className='inlineText' sx={colorType(item.name)} key={index}>
                      {item.name}
                    </S.Text>
                  ))}{' '}
                  pois são sua maior fraquesa!
                </S.Text>
              ) : (
                ''
              )}
              {ddt.length > 0 ? (
                <>
                  <S.Text className='listItem' sx={textDecor(type)}>
                    E não use Pokémons dos tipos{' '}
                    {ddt.map((item, index) => (
                      <S.Text className='inlineText' sx={colorType(item.name)} key={index}>
                        {item.name}
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
                  <S.Text className='listItem' sx={textDecor(type)}>
                    Nem pense em levar Pokémons dos tipos{' '}
                    {ndf.map((item, index) => (
                    <S.Text className='inlineText' sx={colorType(item.name)} key={index}>
                       {item.name}
                      </S.Text>
                    ))}{' '}
                    pois seu dano ao tipo {type} é zero!
                  </S.Text>
                </>
              ) : (
                ''
              )}
              <S.ShinyContainer>
                <S.Text className='listItem' sx={textDecor(type)}>
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
