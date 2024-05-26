
const url = 'https://api.themoviedb.org/3/movie/popular'; // Cambiamos la URL para obtener películas populares
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGRjZGRjZDEzYjU4MjA3MzE3ODk5Y2YxN2RjMDYwZiIsInN1YiI6IjY2NTI4YjIxODRiNzQ5YjUzZGY3Y2I0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pcUfWxnJpdFDjvzFIRE_OTuNi2-reKUU7lTavs7sCJU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    const moviesContainer = document.getElementById('movies-container');
    
    // Limpiamos el contenedor por si acaso
    moviesContainer.innerHTML = '';
    
    // Iteramos sobre todas las películas y las mostramos
    json.results.forEach(movie => {
      const movieContent = `
        <div class="movie">
          <h2>${movie.title}</h2>
          <p>${movie.overview}</p>
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        </div>
      `;
      
      // Insertamos el contenido de la película en el contenedor
      moviesContainer.innerHTML += movieContent;
    });
  })
  .catch(err => console.error('error:' + err));
// let contenedor = document.getElementById("1")



// const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));