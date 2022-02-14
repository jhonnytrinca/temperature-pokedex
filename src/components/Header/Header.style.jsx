import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 90%;
  height: 130px;
  border-radius: 30px 30px 0 0;
  justify-content: center;
  align-items: center;
  margin: 10px auto 0;
  background-color: #c62828;

  @media(max-width: 820px) {
    height: 100px;
  }

  @media(max-width: 680px) {
    height: 90px;
  }

  @media(max-width: 560px) {
    height: 70px;
  }

  @media(max-width: 470px) {
    height: 50px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  color: rgb(255,203,5);
  letter-spacing: 0.25rem;
  -webkit-text-stroke: 3px #01579b;
  text-shadow: #01579b -5px 4px;
  padding: 0 20px;

  svg {
    padding-right: 1rem;
    vertical-align: -20%;
  }

  @media(max-width: 1100px) {
    font-size: 3rem;
    text-shadow: #01579b -4px 3px;
  }

  @media(max-width: 950px) {
    font-size: 2.6rem;
    -webkit-text-stroke: 2px #01579b;
    text-shadow: #01579b -3px 2px;
  }

  @media(max-width: 900px) {
    font-size: 2.4rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -3px 2px;

    svg {
      width: 25%;
      padding-left: 20px;
      vertical-align: -30%;
    }
  }

  @media(max-width: 820px) {
    font-size: 2.4rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -2px 2px;

    svg {
      width: 20%;
      padding-left: 20px;
      vertical-align: -30%;
    }
  }

  @media(max-width: 770px) {
    font-size: 2rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -2px 2px;
    letter-spacing: 0.1rem;

    svg {
      width: 20%;
      padding-left: 20px;
      vertical-align: -60%;
    }
  }

  @media(max-width: 680px) {
    font-size: 1.6rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -2px 2px;

    svg {
      width: 18%;
      padding-left: 10px;
      vertical-align: -80%;
    }
  }

  @media(max-width: 560px) {
    font-size: 1.2rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -1px 1px;
    

    svg {
      width: 18%;
      padding-left: 10px;
      vertical-align: -140%;
    }
  }


  @media(max-width: 470px) {
    font-size: 1rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -1px 1px;

    svg {
      width: 15%;
      padding-left: 10px;
      vertical-align: -160%;
    }
  }

  @media(max-width: 400px) {
    font-size: 0.8rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -1px 1px;

    svg {
      width: 15%;
      padding-left: 10px;
      vertical-align: -210%;
    }
  }
`;