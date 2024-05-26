const btn = document.getElementById("btn");
let suma = 0;

const url = "https://api.themoviedb.org/3/movie/popular"; // Cambiamos la URL para obtener películas populares
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGRjZGRjZDEzYjU4MjA3MzE3ODk5Y2YxN2RjMDYwZiIsInN1YiI6IjY2NTI4YjIxODRiNzQ5YjUzZGY3Y2I0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pcUfWxnJpdFDjvzFIRE_OTuNi2-reKUU7lTavs7sCJU",
  },
};
const traerPelis = ()=>{
  fetch(url, options)
  .then((res) => res.json())
  .then((json) => {
    const moviesContainer = document.getElementById("pelis");
    moviesContainer.innerHTML = "";
    
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
      </div>
      <section>
      `;
      
      // Insertamos el contenido de la película en el contenedor
      moviesContainer.innerHTML += movieContent;
    });
  })
  .catch((err) => console.error("error:" + err));
  
}
btn.addEventListener("click", traerPelis);