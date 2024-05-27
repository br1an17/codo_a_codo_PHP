// const peliAnterior = () => {
//     if (suma > 1) { // Verifica que suma no sea menor que 1
//       suma -= 1;
//       const url = `https://api.themoviedb.org/3/movie/popular?page=${suma}`;
//       console.log(suma);
      
//       fetch(url, options)
//         .then((res) => res.json())
//         .then((json) => {
//           const moviesContainer = document.getElementById("pelis");
//           moviesContainer.innerHTML = "";
//           json.results.forEach((movie) => {
//             const movieContent = `
//             <div class="peliculas">
//               <a href="./info.html">
//                 <div class="pelicula">
//                   <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
//                   <div class="tituloPelicula">
//                     <h4>${movie.title}</h4>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <section>
//             `;
            
//             moviesContainer.innerHTML += movieContent;
//           });
//         })
//         .catch((err) => console.error("error:" + err));
//     }
//   };
// btnAnt.addEventListener("click", peliAnterior);
