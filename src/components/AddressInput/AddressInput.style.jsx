import styled from 'styled-components';
import {
  TextField as MaterialTextField
} from '@mui/material';
import { LoadingButton as MaterialButton } from '@mui/lab';

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  background-color: white;
  margin: 0 auto;
  padding: 30px 0;
  align-items: center;
  justify-content: center;

  @media(max-width: 820px) {
    padding: 20px 0;
  }

  @media(max-width: 380px) {
    padding: 10px 0;
  }
`;

export const TextField = styled(MaterialTextField)`
height: 100%;
`;

export const Button = styled(MaterialButton)`
  cursor: pointer;

  span {
    padding-right: 10px;
  }
  svg {
    height: 75%;

    path {
      fill: white;
      opacity: 1;
    }
  }

  @media(max-width: 820px) {
    span {
      font-size: 0.8rem;
    }

    svg {
      height: 90%;
    }
  }

  @media(max-width: 680px) {
    span {
      font-size: 0.6rem;
    }
  }

  @media(max-width: 560px) {
    padding: 0 6px !important;

    span {
      font-size: 0.4rem;
      padding-right: 4px;
    }
    svg {
      width: 18%;
    }
  }

  @media(max-width: 470px) {
    padding: 0 !important;
  }
`;

export const InnerBox = styled.div`
  width: 60%;
  display: flex;
  gap: 20px;


  @media(max-width: 1100px) {
    width: 70%;
  }

  @media(max-width: 820px) {
    .addressInput input {
      height: 1em;
    }

    .addressInput label {
      line-height: 1em;
    }
  }

  @media(max-width: 770px) {
    width: 75%;
  }

  @media(max-width: 680px) {
    .addressInput input {
      height: 0.8em;
      font-size: 0.9rem;
    }

    .addressInput label {
      line-height: 0.8em;
    }
  }

  @media(max-width: 560px) {
    .addressInput input {
      height: 0.6em;
      font-size: 0.7rem;
    }

    .addressInput label {
      font-size: 0.7rem;
    }

    .addressInput fieldset legend span {
      padding: 0;      
    }
  }

  @media(max-width: 470px) {
    gap: 10px;

    .addressInput input {
      height: 0.5em;
      font-size: 0.5rem;
    }

    .addressInput label {
      font-size: 0.5rem;
    }
  }
`;
