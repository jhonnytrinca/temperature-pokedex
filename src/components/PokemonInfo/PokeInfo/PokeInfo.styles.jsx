import styled from 'styled-components';
import { Typography, Box as MaterialBox } from '@mui/material';


export const Text = styled(Typography).attrs({ variant: 'h6' })`
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

      @media(max-width: 1100px) {
        font-size: 1rem;
      }

      @media(max-width: 950px) {
        font-size: 0.9rem;
      }

      @media(max-width: 820px) {
        font-size: 0.8rem;
      }

      @media(max-width: 750px) {
        font-size: 0.7rem;
      }
    }
    + .inlineText:last-child::before {
      content: ' e ';
      text-transform: lowercase;
      color: black;
      font-weight: 500;
      font-size: 1.25rem;

      @media(max-width: 1100px) {
        font-size: 1rem;
      }

      @media(max-width: 950px) {
        font-size: 0.9rem;
      }

      @media(max-width: 820px) {
        font-size: 0.8rem;
      }

      @media(max-width: 750px) {
        font-size: 0.7rem;
      }
    }
  }

  @media(max-width: 560px) {
  }

  @media(max-width: 470px) {
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 7/-1;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    transition: transform 0.2s;

    :hover {
      transform: scale(1.2);
    }
  }

  @media(max-width: 560px) {
    grid-row: 1;
    img {
      width: 70%;
    }
  }
`;

export const Box = styled(MaterialBox)`
  margin: 10px 40px;
  padding: 30px 20px;
  border-radius: 30px;

  @media(max-width: 900px) {
    margin: 10px 20px;
    padding: 20px 10px; 
  }

  @media(max-width: 770px) {
    margin: 0 16px;
    padding: 20px 10px 10px;
  }

  @media(max-width: 380px) {
    margin: 10px;
  }
`;

export const MainPokemonBox = styled(MaterialBox)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;

  .listItem:hover::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 22px;
    margin-right: 8px;
    vertical-align: -10%;

    @media(max-width: 560px) {
      width: 4px;
      height: 0.8rem;
      margin-right: 3px;
      vertical-align: -20%;
    }

    @media(max-width: 470px) {
      width: 3px;
    }

    @media(max-width: 380px) {
    width: 2px;
    height: 0.7rem;
    }
  }

  @media(max-width: 1100px) {
    .listItem {
      font-size: 1rem;

      .inlineText {
        font-size: 1.2rem;
      }
    }
  }

  @media(max-width: 950px) {
    grid-template-columns: 1fr 1fr;
    .listItem {
      font-size: 0.9rem;
      line-height: 1.4;

      .inlineText {
        font-size: 1rem;
      }
    }
  }

  @media(max-width: 820px) {

    .listItem {
      font-size: 0.8rem;
      line-height: 1.4;

      .inlineText {
        font-size: 0.9rem;
      }
    }
  }

  @media(max-width: 750px) {

    .listItem {
      font-size: 0.7rem;
      line-height: 1.4;

      .inlineText {
        font-size: 0.8rem;
      }
    }
  }

  @media(max-width: 680px) {
    .listItem {
      font-size: 0.7rem;
      line-height: 1.4;

      .inlineText {
        font-size: 0.8rem;
      }
    }
  }

  @media(max-width: 560px) {
    grid-template-columns: 1fr;
    .listItem {
      padding-left: 10px;
    }
  }
`;

export const OtherPokemonsWrapper = styled(MaterialBox)`
  display: flex;
  padding: 0 20px;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; 
  
  @media(max-width: 770px) {
    width: 90%;
    padding: 0 10px;
  }

  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 10px;
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: silver;
    height: 42px;

    @media(max-width: 770px) {
      background: transparent;
    }
  }
`;

export const OtherPhoto = styled.img`
  width: 50%;
  align-items: center;
  padding-bottom: 10px;

  @media(max-width: 560px) {
    width: 100%;
  }
`

export const OtherText = styled(Typography)`
 text-transform: capitalize; 
 text-align: center;
 font-weight: 600 !important;
 padding-bottom: 10px;
`

export const OtherContainer = styled(MaterialBox)`
  max-width: 20%;
  height: 100%;
  flex: 0 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 6px;

  :hover {
      transform: scale(1.1);
      border: 2px solid silver;
      border-radius: 20%;
    }

  @media(max-width: 1100px) {
    .otherList {
      font-size: 1rem;
    }
  }

  @media(max-width: 950px) {
    .otherList {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }

  @media(max-width: 820px) {
    .otherList {
      font-size: 0.8rem;
      line-height: 1.4;
    }
  }

  @media(max-width: 750px) {
    .otherList {
      font-size: 0.7rem;
      line-height: 1.4;
    }
  }

  @media(max-width: 680px) {
    .otherList {
      font-size: 0.6rem;
      line-height: 1.4;
    }
  }

  @media(max-width: 560px) {
    max-width: 25%;
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

&.otherTitle {
  @media(max-width: 1100px) {
    font-size: 1.3rem;
  }

  @media(max-width: 950px) {
    font-size: 1.2rem;
  }

  @media(max-width: 820px) {
    font-size: 1.1rem;
  }

  @media(max-width: 750px) {
    font-size: 1rem;
  }

  @media(max-width: 680px) {
    font-size: 0.9rem;
  }

  @media(max-width: 470px) {
    font-size: 0.7rem;
  }

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


export const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 10px;

svg {
  color: silver;
  -webkit-transform: translate(0%, -50%) ;
  -moz-transform: translate(0%, -50%) ;
  transform: translate(0%, -50%);
  -webkit-animation: fade_move 4s ease-in-out infinite;
  -moz-animation: fade_move 4s ease-in-out infinite;
  animation: fade_move 4s ease-in-out infinite;
}

  @-webkit-keyframes fade_move {
    0% {
      -webkit-transform: translate(-10px, 0);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: translate(10px, 0);
      opacity: 0;
    }
  }

  @-moz-keyframes fade_move {
    0% {
      -moz-transform: translate(-10px, 0);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -moz-transform: translate(10px, 0);
      opacity: 0;
    }
  }

  @keyframes fade_move {
    0% {
      transform: translate(-10px, 0);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: translate(10px, 0);
      opacity: 0;
    }
  }
`

