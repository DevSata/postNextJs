const API_KEY = "893d15988e6969a46a9b6215c22a3fcc";
const BASE_URL = "https://api.themoviedb.org/3";

const peopleRequests = {
  fetchPopular: `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default peopleRequests;
