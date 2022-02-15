import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PokemonSolid from './fonts/PokemonSolid.ttf';
import AddressImput from './components/AddressInput/AddressInput';
import Header from './components/Header/Header';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTemperature } from './hooks';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b71c1c',
      dark: '#801313'
    },
    secondary: {
      main: '#c54949'
    },
    action: {
      disabledBackground: '#ffcdd2',
      disabled: 'white'
    },
    types: {
      bug: { main: '#a8b820', bg: '#E9EDC7' },
      dark: { main: '#705848', bg: '#DBD5D1' },
      dragon: { main: '#7038f8', bg: '#DBCDFD' },
      electric: { main: '#f8d030', bg: '#FDF3CB' },
      fairy: { main: '#ee99ac', bg: '#FBE6EA' },
      fighting: { main: '#c03028', bg: '#EFCBC9' },
      fire: { main: '#f08030', bg: '#FBDFCB' },
      flying: { main: '#6890f0', bg: '#E9E3FB' },
      grass: { main: '#78c850', bg: '#DDF1D3' },
      ghost: { main: '#705898', bg: '#DBD5E5' },
      ground: { main: '#e0c068', bg: '#F7EFD9' },
      ice: { main: '#98d8d8', bg: '#E5F5F5' },
      normal: { main: '#a8a878', bg: '#E9E9DD' },
      poison: { main: '#a040a0', bg: '#E7CFE7' },
      psychic: { main: '#f85888', bg: '#FDD5E1' },
      rock: { main: '#b8a038', bg: '#EDE7CD' },
      steel: { main: '#b8b8d0', bg: '#EDEDF3' },
      water: { main: '#6890f0', bg: '#D9E3FB' }
    }
  }
});

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pokemon Solid';
    src: url(${PokemonSolid}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  h1 {
    font-family: 'Pokemon Solid'
  }

`;

function App() {
  const [address, setAddress] = useState('');
  const { isLoading, getTemperature, climate } = useTemperature();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getTemperature(address);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <AddressImput
            handleSubmit={handleSubmit}
            value={address}
            handleAddress={handleAddress}
          />
          {isLoading ? (
            ''
          ) : (
            <PokemonInfo temp={climate.temp} city={climate.city} weather={climate.weather} wind={climate.wind} />
          )}
        </ThemeProvider>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  & div + div:last-child {
    border-radius: 0 0 30px 30px;
  }
`;

export default App;