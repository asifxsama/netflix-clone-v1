const API_KEY = "02b28ec0d83b0f453cc2c2edafc17114";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_gemres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_gemres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_gemres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_gemres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_gemres=99`

};

export default requests;