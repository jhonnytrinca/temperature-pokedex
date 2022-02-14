import styled from 'styled-components';
import { Typography, Box as MaterialBox } from '@material-ui/core';

export const Text = styled(Typography).attrs({ variant: 'h6' })`
  :hover::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 22px;
    margin-right: 8px;
    vertical-align: -10%;
  }

  .inlineText {
    display: inline;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: capitalize;

    :not(:first-child, :last-child)::before {
      content: ', ';
      color: black;
      font-weight: 500;
      font-size: 1.25rem;
    }
    + .inlineText:last-child::before {
      content: ' e ';
      text-transform: lowercase;
      color: black;
      font-weight: 500;
      font-size: 1.25rem;
    }
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 7/-1;
  align-items: center;

  img {
    width: 90%;
    transition: transform 0.2s;

    :hover {
      transform: scale(1.2);
    }
  }
`;

export const Box = styled(MaterialBox)`
  margin: 10px 40px;
  padding: 30px 20px;
  border-radius: 30px;
`;

export const MainPokemonBox = styled(MaterialBox)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
`;

export const OtherPokemonsWrapper = styled(MaterialBox)`
  display: flex;
  padding: 0 20px;
  width: 95%;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; 

  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 10px;
    background: none;
    
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: silver;
    height: 42px;
  }
`;

export const OtherPhoto = styled.img`
  width: 60%;
  align-items: center;
  padding-bottom: 10px;
`

export const OtherText = styled(Typography)`
 text-transform: capitalize; 
 text-align: center;
 font-weight: 600 !important;
`

export const OtherContainer = styled(MaterialBox)`
  max-width: 20%;
  height: 100%;
  flex: 0 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;

  :hover {
      transform: scale(1.1);
      border: 2px solid silver;
      border-radius: 20%;
    }
`

export const OthersTitle = styled(Typography).attrs({variant: 'h5'})`
text-align: center;
padding-bottom: 1rem;

&::before {
  content: '';
  display: block;
  background-color: silver;
  height: 2px;
  margin-bottom: 1rem;
}

`

export const Container = styled(MaterialBox)`
  height: 100%;
  margin: 0 auto;
  justify-content: center;
`;

export const Shiny = styled.img`
  position: relative;
  bottom: 30%;
  right: 0;
`;

export const ShinyContainer = styled.div`
  display: flex;
`;


