import React from 'react';
import * as S from './Header.style';
import { ReactComponent as PokemonLogo } from '../../img/pokemonLogo.svg';

const Header = () => {
  return (
    <S.Header>
      <S.Title>
        Qual<PokemonLogo />
        vive aonde moro?
      </S.Title>
    </S.Header>
  );
};

export default Header;
