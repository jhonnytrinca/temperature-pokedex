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

  @media(max-width: 470px) {
    width: 35%;
    align-self: center;
    span {
      font-size: 0.7rem;
    }

    svg {
      height: 10px;
    }
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

  @media(max-width: 470px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;

    .addressInput label {
      font-size: 0.9rem;
    }

    .addressInput input::placeholder {
      font-size: 0.7rem;
    }
  }
`;
