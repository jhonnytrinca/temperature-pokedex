import React from 'react';
import * as S from './AddressInput.style';
import { ReactComponent as Pokeball } from '../../img/pokeball.svg';

const AddressImput = ({ handleSubmit, handleAddress, value }) => {

  return (
    <>
      <S.Container>
        <S.InnerBox onSubmit={handleSubmit}>
          <S.TextField
            className='addressInput'
            type='text'
            placeholder='Insira a cidade que deseja pesquisar'
            label='Cidade'
            value={value}
            onChange={handleAddress}
            fullWidth
            color='secondary'
            required
            size='small'
          />
          <S.Button
            variant='contained'
            disabled={!value}
            color='primary'
            type='submit'
          >
            <span>Buscar</span> <Pokeball fill='white' />
          </S.Button>
        </S.InnerBox>
      </S.Container>
    </>
  );
};

export default AddressImput;
