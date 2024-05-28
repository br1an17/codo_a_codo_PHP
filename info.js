const info = document.getElementsByClassName("tituloPelicula")


const traerInfo= () => {
    const url = `https://api.themoviedb.org/3/movie/popular`;
    
    
    fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
        const moviesContainer = document.getElementById("infor");
        moviesContainer.innerHTML = "";
        const movieContent = `
        <div class="detalle">
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
        console.log(json.results)
        
    })
    .catch((err) => console.error("error:" + err));
};
Array.from(info).forEach(info => {
    info.addEventListener('click', () => {
        traerInfo()
    });
})