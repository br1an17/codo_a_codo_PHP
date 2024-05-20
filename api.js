


let contenedor = document.getElementById("1")



const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));