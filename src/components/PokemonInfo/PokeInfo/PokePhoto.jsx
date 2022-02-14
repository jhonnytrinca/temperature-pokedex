import React from 'react';
import * as S from './PokeInfo.styles';

const PokePhoto = ({ photos, name }) => {
  const artwork = photos.sprites.other['official-artwork'].front_default;

  return (
    <S.PhotoWrapper className='box'>
      <img src={artwork} alt='pokemon' />
    </S.PhotoWrapper>
  );
};

export default PokePhoto;
