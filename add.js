import { allMovies } from "./allMovies.js";

localStorage.setItem("savedMovies", JSON.stringify(allMovies));

let alleFilms = JSON.parse(localStorage.getItem("savedMovies"));

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  createMovie();
});

function createMovie() {
  const newMovie = {
    titel: document.getElementById("movieName").value,
    score: document.getElementById("description").value,
    score: document.getElementById("score").value,
    director: document.getElementById("director").value,
  };
  alleFilms.push(newMovie);
  console.log(alleFilms.length);
  localStorage.setItem("savedMovies", JSON.stringify(alleFilms));
}
