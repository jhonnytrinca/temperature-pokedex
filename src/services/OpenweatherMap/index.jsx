import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENWHEATHER_KEY

const getCity = (city) => {
  return axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
  `);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCity
};
