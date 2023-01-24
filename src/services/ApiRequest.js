import axios from "axios";

const requestOptions = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {},
  headers: {
    'X-RapidAPI-Key': 'ea5533f125msh7381b88297d175fp1bdaf6jsn100496398d91',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

const fetch = async (id) => {
  requestOptions.params = { id };
  const response = await axios.request(requestOptions)
  return response;
}

export { fetch };