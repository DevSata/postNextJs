const API_KEY = "893d15988e6969a46a9b6215c22a3fcc";
const BASE_URL = "https://api.themoviedb.org/3";

const tvRequests = {
  fetchPopular: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchOnTheAir: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
};


//https://api.themoviedb.org/3/movie/550?api_key=35203a0f8c1c556128bb18590fefde7b

//https://api.themoviedb.org/3/discover/movie?api_key=35203a0f8c1c556128bb18590fefde7b&with_networks=213


export default tvRequests;