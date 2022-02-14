import React, { useEffect, useState } from 'react';
import { useTemperature } from '../../../hooks';
import * as S from './Temperature.styles';

const Temperature = ({ city, temp, weather }) => {
  return (
    <S.TemperatureWrapper>
      <S.Text className='temperature'>
        A temperatura em {city} é de {temp}º C{' '}
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt='temperatura'
        />
      </S.Text>
    </S.TemperatureWrapper>
  );
};

export default Temperature;
