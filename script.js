document.querySelector("h1").innerText = "Marvel Movies";

document.getElementById("geenfilms").remove();

function addMovie(titel, korteDesc, score, director) {
  const filmArtikel = document.createElement("article");
  filmArtikel.innerHTML = `
    <p class="score">${score}</p>
    <h2 class="movieTitle">${titel}</h2>
    <p>${korteDesc}</p>
    <p class="director">${director}</p>
  `;
  document.querySelector("section.films").appendChild(filmArtikel);
}

function sort() {
  /*Empty for now*/
}

addMovie(
  "Iron Man",
  "A man gets gravely wounded and decides to escape and from that moment onward decides to do no harm and makes a suit of armor to protect others.",
  "85",
  "Jon Favreau"
);

addMovie(
  "Iron Man",
  "A man gets gravely wounded and decides to escape and from that moment onward decides to do no harm and makes a suit of armor to protect others.",
  "70",
  "Jon Favreau"
);

addMovie(
  "Iron Man",
  "A man gets gravely wounded and decides to escape and from that moment onward decides to do no harm and makes a suit of armor to protect others.",
  "90",
  "Jon Favreau"
);

sort();
