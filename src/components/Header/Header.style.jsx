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

  .responsive {
    display: inline;

    @media(min-width: 490px) {
      display: none;
    }
  }

  @media(max-width: 820px) {
    height: 100px;
  }

  @media(max-width: 680px) {
    height: 90px;
  }

  @media(max-width: 490px) {
    height: 130px;
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
  display: inline-block;

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
      width: 180px;
      height: 60px;
      padding-left: 20px;
    }
  }

  @media(max-width: 830px) {
    font-size: 2.4rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -2px 2px;

    svg {
      width: 150px;
      height: 50px;
      padding-left: 6px;
    }
  }

  @media(max-width: 770px) {
    font-size: 2rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -2px 2px;
    letter-spacing: 0.1rem;
  }

  @media(max-width: 680px) {
    font-size: 1.8rem;
    -webkit-text-stroke: 1px #01579b;
    text-shadow: #01579b -2px 2px;

    svg {
      width: 130;
      height: 43px;
    }
  }
  
  @media(max-width: 490px) {
    font-size: 2.5rem;
    line-height: 0.5;
    text-align: center;

    svg {
      width: 150;
      height: 50px;
    }
  }

  @media(max-width: 460px) {
    font-size: 2rem;
    line-height: 0.5;
    text-align: center;

    svg {
      width: 150;
      height: 50px;
      vertical-align: -40%;
    }
  }

  @media(max-width: 380px) {
    font-size: 1.8rem;
    line-height: 0.5;
    text-align: center;

    svg {
      width: 150;
      height: 50px;
      vertical-align: -40%;
    }
  }
`;