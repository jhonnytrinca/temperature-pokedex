import React from 'react';
import * as S from './Header.style';
import { ReactComponent as PokemonLogo } from '../../img/pokemonLogo.svg';

const Header = () => {
  return (
    <S.Header>
      <S.Title>
        Qual<PokemonLogo /><br className='responsive'/>
        vive aonde moro?
      </S.Title>
    </S.Header>
  );
};

export default Header;
