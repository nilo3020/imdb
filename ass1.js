
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
var selectedGenre = "all";
var selectedRating = "all";
var selectedStarring = "all";
var selectedEra = "all";
let moviePosterTitle;
var filterMovies = [];
var randomMovie = [];
var streamLogo;

// Expand/collapse filterdivs
$(".togglediv").click(function() {
  var togglediv = $(this);
  var filterDrop = togglediv.next();
  filterDrop.slideToggle(500, function() {
  })
})
//change arrow up/down
$(".togglediv").on("click", function() {
  $(this).children("span").toggleClass("arrowDown arrowUp")
})

// Detect stream on click
$(".stream").on("click", function() {
  selectedStream = ($(this).data("stream"));
  $(".stream").removeClass('selectedFilter');
  $(this).addClass('selectedFilter');
  console.log(selectedStream)
})

// Detect genre on click
$(".genre").on("click", function() {
  selectedGenre = $(this).data("genre");
  $(".genre").removeClass('selectedFilter');
  $(this).addClass('selectedFilter');
  console.log(selectedGenre)
})

// Detect rating on click
$(".rating").on("click", function() {
  selectedRating = $(this).data("rating");
  $(".rating").removeClass('selectedFilter');
  $(this).addClass('selectedFilter');
  console.log(selectedRating)
})

// Detect era on click
$(".era").on("click", function() {
  selectedEra = $(this).data("era");
  $(".era").removeClass('selectedFilter');
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
function displayStreamLogo() {
  for(i in randomMovie.stream) {
    streamLogo = randomMovie.stream[i]
    if(randomMovie.stream[i] === "Binge") {
      $(".movieInfoStreams .rightIn-col").append(`<img src="logo-img/Binge_logo-free.png">`)
    }
    if (streamLogo != "Binge")
      $(".movieInfoStreams .rightIn-col").append(`<img src="logo-img/${streamLogo}_logo.svg">`)
  }
}

function writeOutActors() {
  for(i in randomMovie.actors) {
    $(".movieInfoStarring .rightIn-col").append(`<p>${randomMovie.actors[i]}</p>`)
  }
}

function writeOutGenres() {
  for(i in randomMovie.genre)
  $(".movieInfoGenre .rightIn-col").append(`<p>${randomMovie.genre[i]}</p>`)
}

//filter all the variables for random movie
function filterMovieListRandom(stream, genre, imdbScore, starring, era) {
  filterMovies = [];
  for(var x of movieList) {
    var filterGenre;
    var filterRating;
    var filterStarring;
    var filterEra;
    var filterStream = x.stream.includes(stream)

    if (genre == "all") { filterGenre = true; }
    if (imdbScore == "all") { filterRating = true; }
    if (starring == "all") { filterStarring = true; }
    if (era == "all") { filterEra = true; }

    if (genre != "all") {
      filterGenre = x.genre.includes(genre);
    }
    if (imdbScore != "all") {
      filterRating = x.imdbScore >= imdbScore;
    }
    if (starring != "all") {
      filterStarring = x.actors.includes(starring);
    }
    if (era != "all") {
      filterEra = x.era === era;
    }

    if (filterStream && filterGenre && filterRating && filterStarring && filterEra) {
      filterMovies.push(x);
      console.log(x)
    }
  }
  console.log(filterMovies)
  randomMovie = filterMovies[Math.floor(Math.random() * filterMovies.length)];
  console.log(randomMovie)
  console.log(randomMovie.title)

  showCorrectPoster();
  displayStreamLogo();
  writeOutActors();
  writeOutGenres();
  $(".movieInfoTitle").append(`<h1>${randomMovie.title}</h1>`)
  $(".movieInfoPlot").append("Plot: " + randomMovie.plot)
  $(".movieInfoRating .rightIn-col").append(randomMovie.imdbScore)
  $(".movieInfoEra .rightIn-col").append(randomMovie.era)
}

// Generate the random movie
function generateRandomMovie () {
  filterMovieListRandom(selectedStream, selectedGenre, selectedRating, selectedStarring, selectedEra);
}

// Show the div with the random movie
$("#showRandomMovieBtn").on("click", function() {
  $("#randomDiv").show();
  generateRandomMovie();
});
// Hide on click
$(".shadowDiv").on("click", function() {
  $("#randomDiv").hide();
  $(".moviePoster").html("");
  $(".movieInfoTitle").html("");
  $(".movieInfoPlot").html("");
  $(".movieInfoStreams .rightIn-col").html("");
  $(".movieInfoStarring .rightIn-col").html("");
  $(".movieInfoGenre .rightIn-col").html("");
  $(".movieInfoRating .rightIn-col").html("");
  $(".movieInfoEra .rightIn-col").html("");
})






// ########################### LIST VIEW ###########################

// Filter for list of movies
function filterMovieList(stream, genre, imdbScore, starring, era) {
  filterMovies = [];
  for(var x of movieList) {
    var filterGenre;
    var filterRating;
    var filterStarring;
    var filterEra;
    var filterStream = x.stream.includes(stream)

    // reset all filters to show all movies
    if (genre == "all") { filterGenre = true; }
    if (imdbScore == "all") { filterRating = true; }
    if (starring == "all") { filterStarring = true; }
    if (era == "all") { filterEra = true; }

    // define selected filters
    if (genre != "all") {
      filterGenre = x.genre.includes(genre);
    }
    if (imdbScore != "all") {
      filterRating = x.imdbScore >= imdbScore;
    }
    if (starring != "all") {
      filterStarring = x.actors.includes(starring);
    }
    if (era != "all") {
      filterEra = x.era === era;
    }
    // create var of movies matching filter
    if (filterStream && filterGenre && filterRating && filterStarring && filterEra) { //
      filterMovies.push(x);
      console.log(x)
    }
  }
  console.log(filterMovies)
// Trying to get the right stream logos in list
  for(i in filterMovies) {
    moviePosterTitle = filterMovies[i].title
    console.log("LENGTH OF LOGO ARRAY: " + filterMovies[i].stream.length)
    var streamingbox = $("<div class='streaming'> </div>");
    for(x=0; x<filterMovies[i].stream.length; x++) {
      streamLogo = filterMovies[i].stream[x]
      if(filterMovies[i].stream[x] == "Binge") {
        streamingbox.append(`<img src="logo-img/Binge_logo-free.png">`)
      }
      else {
        streamingbox.append(`<img src="logo-img/${streamLogo}_logo.svg">`)
      }
    }

    $(".fullList").append(`<div class="listRow">
    <div class="left-col">
    <div class="rowTitle"><h1>${filterMovies[i].title}</h1></div>
    </div>
    <div class="right-col">
    <div class="rating"><img src="img/IMDB_Logo_2016.svg"> Score: ${filterMovies[i].imdbScore}</div>
    <div class="listPoster"><img src="posters/${moviePosterTitle}.jpg"></div>
    </div>`)
    $(".listRow .left-col").eq(i).append(streamingbox);
  }
}

// generate list of filtered movies
function generateFullList() {
  filterMovieList(selectedStream, selectedGenre, selectedRating, selectedStarring, selectedEra);
}

// show the div with the list
$("#showFullListBtn").on("click", function() {
  $("#fullListDiv").show();
  generateFullList();
});

// hide div on click #shadowDiv
$(".shadowDiv").on("click", function() {
  $("#fullListDiv").hide();
  $(".fullList").html("");
})
