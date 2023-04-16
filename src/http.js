import axios from 'axios';

export default axios.create({
  baseURL: "https://rgs-heroku.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
