
const movieList = [
  {
    title: 'The Shawshank Redemption',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    imdbScore: 9.3,
    era: 1990,
    genre: ['drama'],
    stream: ['Netflix', 'Binge'],
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    title: 'The Godfather',
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    imdbScore: 9.2,
    era: 1970,
    genre: ['crime', 'drama'],
    stream: ['Netflix', 'Stan', 'Prime'],
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    title: 'The Godfather Part II',
    actors: ['Al Pacino', 'Robert DeNiro', 'Robert Duvall'],
    imdbScore: 9.0,
    era: 1970,
    genre: ['crime', 'drama'],
    stream: ['Stan', 'Prime'],
    plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
  },
  {
    title: 'The Dark Knight',
    actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    imdbScore: 9.0,
    era: 2000,
    genre: ['action', 'crime', 'drama', 'thriller'],
    stream: ['Binge'],
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    title: '12 Angry Men',
    actors: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam'],
    imdbScore: 8.9,
    era: 1950,
    genre: ['crime', 'drama'],
    stream: ['Stan'],
    plot: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."
  },
  {
    title: 'Pulp Fiction',
    actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    imdbScore: 8.9,
    era: 1990,
    genre: ['crime', 'drama'],
    stream: ['Stan', 'Binge'],
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    title: 'The Good the Bad and the Ugly',
    actors: ['Clint Eastwood', 'Eli Wallach', 'Lee Van Cleef'],
    imdbScore: 8.8,
    era: 1960,
    genre: ['western'],
    stream: ['Stan'],
    plot: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
  },
  {
    title: 'Fight Club',
    actors: ['Brad Pitt', 'Edward Norton', 'Meat Loaf'],
    imdbScore: 8.8,
    era: 1990,
    genre: ['drama'],
    stream: ['Prime'],
    plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
  },
  {
    title: 'Forrest Gump',
    actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    imdbScore: 8.8,
    era: 1990,
    genre: ['drama', 'romance'],
    stream: ['Stan', 'Prime'],
    plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
  },
  {
    title: 'Inception',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    imdbScore: 8.8,
    era: 2010,
    genre: ['action', 'adventure', 'sci-fi'],
    stream: ['Netflix'],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  }
]

// GLOBAL VARIABLES
var selectedStream;
var selectedGenre;
var selectedRating;
var selectedStarring;
var selectedEra;
let moviePosterTitle;
var filterMovies = [];
var randomMovie = [];
var streamLogo;

// Detect stream on click
$(".stream").on("click", function() {
  selectedStream = $(this).data("stream");
  $(this).addClass('selectedFilter');
  console.log(selectedStream)
})

// Detect genre on click
$(".genre").on("click", function() {
  selectedGenre = $(this).data("genre");
  $(this).addClass('selectedFilter');
  console.log(selectedGenre)
})

// Detect rating on click
$(".rating").on("click", function() {
  selectedRating = $(this).data("rating");
  $(this).addClass('selectedFilter');
  console.log(selectedRating)
})

// Detect era on click
$(".era").on("click", function() {
  selectedEra = $(this).data("era");
  $(this).addClass('selectedFilter');
  console.log(selectedEra)
})

// Show correct poster for random movie
function showCorrectPoster() {
  moviePosterTitle = randomMovie.title
  if (moviePosterTitle === randomMovie.title) {
    const url = encodeURI(`posters/${moviePosterTitle}.jpg`)
    console.log(url)
    $(".moviePoster").append(`<img src="${url}">`)
  }
}

// show correct stream logo
function changeTextToLogo() {
  for(i in randomMovie.stream) {
    streamLogo = randomMovie.stream[i]
    if(streamLogo === randomMovie.stream[i]) {
      $(".movieInfoStreams").append(`<img src="logo-img/${streamLogo}_logo.svg">`)
    }
    if(randomMovie.stream[i] === "Binge") {
      $(".movieInfoStreams").append(`<img src="logo-img/Binge_logo-free.png">`)
    }
  }
}

//filter all the variables for random movie
function filterMovieListRandom(stream, genre, imdbScore, starring, era) {
  filterMovies = [];
  for(var x of movieList) {
    const filterStream = x.stream.includes(stream)
    const filterGenre = x.genre.includes(genre)
    const filterRating = x.imdbScore >= imdbScore
    const filterStarring = x.actors.includes(starring)
    const filterEra = x.era === era

    if (filterStream) { // && filterGenre && filterRating && filterEra
      filterMovies.push(x);
      console.log(x)
    }
  }
  console.log(filterMovies)
  randomMovie = filterMovies[Math.floor(Math.random() * filterMovies.length)];
  console.log(randomMovie)
  console.log(randomMovie.title)

  showCorrectPoster();
  changeTextToLogo();

  $(".movieInfoTitle").append(`<h1>` + randomMovie.title + `</h1>`)
  $(".movieInfoPlot").append("Plot: " + randomMovie.plot)
  $(".movieInfoRating").append("Rating: " + randomMovie.imdbScore)
  $(".movieInfoGenre").append("Genre: " + randomMovie.genre)
  $(".movieInfoStarring").append("Starring: " + randomMovie.actors)
  $(".movieInfoEra").append("Era: " + randomMovie.era)
}

// Generate the random movie
function generateRandomMovie () {
  filterMovieListRandom(selectedStream, selectedGenre, selectedRating, selectedStarring, selectedEra);
}

// Show the div with the random movie
function showRandomMovieDiv() {
  const randomMovieDiv = document.getElementById("randomDiv");
  if (randomMovieDiv.style.display === "block") {
    randomMovieDiv.style.display = "none";
  } else {
    randomMovieDiv.style.display = "block";
  }
  generateRandomMovie();
}





// ########################### LIST VIEW ###########################

function textToLogoList() {
  for(x=0; x<filterMovies[i].stream.length; i++) {
    streamLogo = filterMovies[i].stream[x]
    $(".streaming").append(`<img src="logo-img/${streamLogo}_logo.svg">`)
    console.log(streamLogo)
  }
}
// Filter for list of movies
function filterMovieList(stream, genre, imdbScore, starring, era) {
  filterMovies = [];
  for(var x of movieList) {
    const filterStream = x.stream.includes(stream)
    const filterGenre = x.genre.includes(genre)
    const filterRating = x.imdbScore >= imdbScore
    const filterStarring = x.actors.includes(starring)
    const filterEra = x.era === era

    if (filterStream) { // && filterGenre && filterRating && filterEra
      filterMovies.push(x);
      console.log(x)
    }
  }
  console.log(filterMovies)

  for(i in filterMovies) {
    moviePosterTitle = filterMovies[i].title
    for(x in filterMovies[i].stream) {
      streamLogo = filterMovies[i].stream[x]
      $(".streaming").append(`<img src="logo-img/${streamLogo}_logo.svg">`)
      console.log(streamLogo)
    }
    $(".fullList").append(`<div class="listRow">
    <div class="left-col">
    <div class="rowTitle"><h1>${filterMovies[i].title}</h1></div>
    <div class="streaming"></div>
    </div>
    <div class="right-col">
    <div class="rating"><img src="img/IMDB_Logo_2016.svg"> Score: ${filterMovies[i].imdbScore}</div>
    <div class="listPoster"><img src="posters/${moviePosterTitle}.jpg"></div>
    </div>`)
  }
}

function generateFullList() {
  filterMovieList(selectedStream, selectedGenre, selectedRating, selectedStarring, selectedEra);
}

function showFullListDiv() {
  const fullListDiv = document.getElementById("fullListDiv");
  if (fullListDiv.style.display === "block") {
    fullListDiv.style.display = "none";
  } else {
    fullListDiv.style.display = "block";
  }
  generateFullList();
}

























// console.log(filterMovies); // Gives array with 5 movies
//
// function fullListOfMovies() {
//   for(i=0; i<filterMovies.length; i++) {
//     console.log(filterMovies[i].title);
//   }
// }
//
// fullListOfMovies(); // Gives five movies
//
// let filterMoviesTitle = []
// for(i=0; i<filterMovies.length; i++) {
//   const filterMoviesTitle = filterMovies[i].title.slice(0)
//   console.log(filterMoviesTitle)
// }



// function showFullList() {
//   $(".content").prepend(`<div id="shadowdiv">`)
//   $("#shadowdiv").append(`<div class="fullList">`)
//   $(".fullList").append(`<div id="listRow" class="dark">`)
//     document.getElementById("listRow").innerHTML = filterMovies[0].title;
//   $(".fullList").append(`div id="listRow" class="light">`)
//     document.getElementById("ListRow").innerHTML = filterMovies[1].title;
// }


//
//
// // $(".movieInfoTitle").append(`<h1>` + randomMovie.title + `</h1>`)
// // $(".movieInfoStreams").append("Stream: " + randomMovie.stream)
// // $(".movieInfoRating").append(randomMovie.imdbScore)
// // $(".genre").append("Genre: " + randomMovie.genre)
// // $(".starring").append("Starring: " + randomMovie.actors)
// // $(".era").append(randomMovie.era)



// if (randomMovie.title === "Forrest Gump") {
//   $(".moviePoster").append(`<img src="posters/forrest-gump.jpg">`)
// }
// if (randomMovie.title === "12 Angry Men") {
//   $(".moviePoster").append(`<img src="posters/12-angry-men.jpg">`)
// }
// if (randomMovie.title === "The Dark Knight") {
//   $(".moviePoster").append(`<img src="posters/darkknight.jpg">`)
// }
// if (randomMovie.title === "Fight Club") {
//   $(".moviePoster").append(`<img src="posters/fightclub.jpg">`)
// }
// if (randomMovie.title === "Inception") {
//   $(".moviePoster").append(`<img src="posters/inception.jpg">`)
// }
// if (randomMovie.title === "Pulp Fiction") {
//   $(".moviePoster").append(`<img src="posters/pulp-fiction.jpg">`)
// }
// if (randomMovie.title === "The Shawshank Redemption") {
//   $(".moviePoster").append(`<img src="posters/shawshank.jpg">`)
// }
// if (randomMovie.title === "The Godfather") {
//   $(".moviePoster").append(`<img src="posters/the-godfather.jpg">`)
// }
// if (randomMovie.title === "The Godfather: Part II") {
//   $(".moviePoster").append(`<img src="posters/the-godfather-pt2.jpg">`)
// }
// if (randomMovie.title === "The Good, The Bad and The Ugly") {
//   $(".moviePoster").append(`<img src="posters/thegood.jpg">`)
// }














// const goodMovies = movieList.filter((movie) => {
//  	return movie.imdbScore >= 9 // True or false statement that checks if the movie should remain in the list
// }) // Returns both movies
//
//
// const onNetflix = movieList.filter((movie) => {
//  	// this is optional, but quite good if working with user input:
//  	const lowercaseStreams = movie.stream.map((s) => {
//  		// Convert all stream names to lowercase to avoid case sensitivity
//  		return s.toLocaleLowerCase()
//  	})
//
//  	return lowercaseStreams.includes('netflix') // Returns true if movie is on nflix
//  })
//
//  const averageRating = movieList.reduce((sum, movie) => (sum += movie.imdbScore), 0) / movieList.length
//
//  console.log({ goodMovies, onNetflix, averageRating })
