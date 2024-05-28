// const info = document.getElementsByClassName("tituloPelicula")


// const traerInfo= () => {
//     const url = `https://api.themoviedb.org/3/movie/popular`;
    
    
//     fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => {
//         const moviesContainer = document.getElementById("infor");
//         moviesContainer.innerHTML = "";
//         const movieContent = `
//         <div class="detalle">
//         <a href="./info.html">
//         <div class="pelicula">
//         <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
//         <div class="tituloPelicula">
//         <h4>${movie.title}</h4>
//         </div>
//         </div>
//         </a>
//         </div>
//         <section>
//         `;
        
//         moviesContainer.innerHTML += movieContent;
//         console.log(json.results)
        
//     })
//     .catch((err) => console.error("error:" + err));
// };
// Array.from(info).forEach(info => {
//     info.addEventListener('click', () => {
//         traerInfo()
//     });
// })

document.querySelectorAll('.pelicula').forEach(pelicula => {
    pelicula.addEventListener('click', (event) => {
        event.preventDefault(); // Para evitar que el enlace siga su URL
        const movieId = pelicula.getAttribute('data-id');
        console.log(movieId)
        localStorage.setItem('selectedMovieId', movieId);
        window.location.href = 'info.html'; // Redirigir a info.html
    });
});
const traerInfo = () => {
    const movieId = localStorage.getItem('selectedMovieId');

    if (!movieId) return;

    const url = `https://api.themoviedb.org/3/movie/1`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGRjZGRjZDEzYjU4MjA3MzE3ODk5Y2YxN2RjMDYwZiIsInN1YiI6IjY2NTI4YjIxODRiNzQ5YjUzZGY3Y2I0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pcUfWxnJpdFDjvzFIRE_OTuNi2-reKUU7lTavs7sCJU",
  },
};
    fetch(url, options)
        .then((res) => res.json())
        .then((movie) => {
            const moviesContainer = document.getElementById("infor");
            moviesContainer.innerHTML = `
                <div class="detalle">
                    <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <div class="tituloPelicula">
                        <h4>${movie.title}</h4>
                        <p>${movie.overview}</p>
                    </div>
                </div>
            `;
        })
        .catch((err) => console.error("error:" + err));
};

// Ejecutar traerInfo al cargar la página info.html
document.addEventListener('DOMContentLoaded', traerInfo);