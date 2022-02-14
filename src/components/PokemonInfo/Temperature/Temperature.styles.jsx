import styled from 'styled-components';
import { Typography } from '@mui/material';

export const TemperatureWrapper = styled.div`
  align-items: center;
  text-align: center;
  background-color: white;

  img {
    vertical-align: -50%;
    max-width: 90px;
  }

  @media(max-width: 1200px) {
    .temperature {
      font-size: 2.7rem;
    }
  }

  @media(max-width: 1100px) {
    .temperature {
      font-size: 2.4rem;
    }
    img {
      max-width: 80px;
    }
  }

  @media(max-width: 950px) {
    .temperature {
      font-size: 2.1rem;
    }
    img {
      vertical-align: -60%
    }
  }

  @media(max-width: 900px) {
    .temperature {
      font-size: 1.8rem;
    }
    img {
      max-width: 70px;
    }
  }

  @media(max-width: 770px) {
    .temperature {
      font-size: 1.6rem;
    }
  }

  @media(max-width: 680px) {
    .temperature {
      font-size: 1.4rem;
    }
    img {
      max-width: 60px;
      vertical-align: -80%;
    }
  }

  @media(max-width: 580px) {
    .temperature {
      font-size: 1.1rem;
    }
    img {
      max-width: 50px;
    }
  }

  @media(max-width: 470px) {
    .temperature {
      font-size: 0.8rem;
    }
    img {
      max-width: 40px;
    }
  }
`;

export const Text = styled(Typography).attrs({ variant: 'h3' })``;
