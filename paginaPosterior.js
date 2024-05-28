const btnPost = document.getElementById("btnPost");
const btnAnt = document.getElementById("btnAnt");
let suma = 0;
const url = `https://api.themoviedb.org/3/movie/popular`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGRjZGRjZDEzYjU4MjA3MzE3ODk5Y2YxN2RjMDYwZiIsInN1YiI6IjY2NTI4YjIxODRiNzQ5YjUzZGY3Y2I0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pcUfWxnJpdFDjvzFIRE_OTuNi2-reKUU7lTavs7sCJU",
  },
};

const actualizarPelis = () => {
  const pagina = `${url}?page=${suma}`;
  
  fetch(pagina, options)
  .then((res) => res.json())
  .then((json) => {
    const moviesContainer = document.getElementById("pelis");
    moviesContainer.innerHTML = "";
    console.log(json.results);
      json.results.forEach((movie) => {
        const movieContent = `
        <div class="peliculas">
          <a href="./info.html">
            <div class="pelicula">
              <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              <div class="tituloPelicula">
                <h4>${movie.title}</h4>
              </div>
            </div>
          </a>
        </div>
        <section>
        `;
        
        moviesContainer.innerHTML += movieContent;
      });
    })
    .catch((err) => console.error("error:" + err));
};

const traerPelis = () => {
  suma += 1; // Incrementa `suma` antes de llamar a la API
  actualizarPelis();
};

const peliAnterior = () => {
  if (suma > 1) { // Verifica que suma no sea menor que 1
    suma -= 1; // Decrementa `suma` antes de llamar a la API
    actualizarPelis();
  }
};

btnPost.addEventListener("click", traerPelis);
btnAnt.addEventListener("click", peliAnterior);
