const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const movieSmall=[]
const movieMedian=[]
const movieBig=[]

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  if(movies[i].durationInMinutes < 100){
movieSmall.push(movie)
}
else if(movie.durationInMinutes >100 && movie.durationInMinutes <200 ){
movieMedian.push(movie)
}else if(movie.durationInMinutes >200){
  movieBig.push(movie)
}

  }
  
  console.log("Peliculas Cortas:", movieSmall);
  console.log("Peliculas Medianas:", movieMedian);
  console.log("Peliculas Largas:", movieBig);