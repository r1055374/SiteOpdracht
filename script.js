let alleFilms = JSON.parse(localStorage.getItem("savedMovies"));

document.getElementById("geenfilms").remove();

function addMovie(filmInfo) {
  const filmArtikel = document.createElement("article");
  filmArtikel.innerHTML = `
    <p class="score">${filmInfo.score}</p>
    <h2 class="movieTitle">${filmInfo.titel}</h2>
    <p>${filmInfo.tekst}</p>
    <p class="director">${filmInfo.director}</p>
  `;
  document.querySelector("section.films").appendChild(filmArtikel);
}

alleFilms.forEach((movie) => {
  addMovie(movie);
});

function sort() {
  alleFilms.sort(function (a, b) {
    return a.score - b.score;
  });
  alleFilms.reverse();
  document.querySelector("section.films").innerHTML = "";
  for (let i = 0; i < alleFilms.length; i++) {
    addMovie(alleFilms[i]);
  }
}
