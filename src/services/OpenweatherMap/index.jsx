import axios from 'axios';

const getCity = (city) => {
  return axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9990dbce112e9bbbbd05895b31677a23&units=metric
  `);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCity
};
