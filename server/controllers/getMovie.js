import MovieData from "../model/movie.model.js";

export const getMovie = async (req, res) => {
  
  // Get the movie id
  const { id } = req.params;

  try {
    // get the movie list
    const movies = await MovieData.find({
      userId: id,
    });
    // sort all the movies
    const sortedMovies = movies
      .map((movie) => movie)
      .sort((a, b) => b.vote_average - a.vote_average);
    // return all the movies
    return res.json({ status: "ok", quote: sortedMovies });
  } catch (error) {
    console.log("🚀 ~ file: index.js:37 ~ app.get ~ error:", error.message);
  }
};
