
const movieList = [
  {
    title: 'The Shawshank Redemption',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    imdbScore: 9.3,
    era: 1990,
    genre: ['Drama'],
    stream: ['Netflix', 'Binge'],
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6hB3S9bIaco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    title: 'The Godfather',
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    imdbScore: 9.2,
    era: 1970,
    genre: ['Crime', 'Drama'],
    stream: ['Netflix', 'Stan', 'Prime'],
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sY1S34973zA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    title: 'The Godfather Part II',
    actors: ['Al Pacino', 'Robert DeNiro', 'Robert Duvall'],
    imdbScore: 9.0,
    era: 1970,
    genre: ['Crime', 'Drama'],
    stream: ['Stan', 'Prime'],
    plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9O1Iy9od7-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    title: 'The Dark Knight',
    actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    imdbScore: 9.0,
    era: 2000,
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    stream: ['Binge'],
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EXeTwQWrcwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    title: '12 Angry Men',
    actors: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam'],
    imdbScore: 8.9,
    era: 1950,
    genre: ['Crime', 'Drama'],
    stream: ['Stan'],
    plot: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2L4IhbF2WK0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    title: 'Pulp Fiction',
    actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    imdbScore: 8.9,
    era: 1990,
    genre: ['Crime', 'Drama'],
    stream: ['Stan', 'Binge'],
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/s7EdQ4FqbhY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    title: 'The Good the Bad and the Ugly',
    actors: ['Clint Eastwood', 'Eli Wallach', 'Lee Van Cleef'],
    imdbScore: 8.8,
    era: 1960,
    genre: ['Western'],
    stream: ['Stan'],
    plot: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WCN5JJY_wiA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    title: 'Fight Club',
    actors: ['Brad Pitt', 'Edward Norton', 'Meat Loaf'],
    imdbScore: 8.8,
    era: 1990,
    genre: ['Drama'],
    stream: ['Prime'],
    plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SUXWAEX2jlg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    title: 'Forrest Gump',
    actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    imdbScore: 8.8,
    era: 1990,
    genre: ['Drama', 'Romance'],
    stream: ['Stan', 'Prime'],
    plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bLvqoHBptjg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    title: 'Inception',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    imdbScore: 8.8,
    era: 2010,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    stream: ['Netflix'],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8hP9D6kZseM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  }
]

// GLOBAL VARIABLES
var selectedStream = [];
var selectedGenre = [];
var selectedRating = "all";
var selectedStarring = "all";
var selectedEra = "all";
let moviePosterTitle;
var filterMovies = [];
var randomMovie = [];
var streamLogo;


function modeSwitch() {
  document.body.classList.toggle("light")
  $("#outer-box").toggleClass("light")
  $(".filterSubject").toggleClass("light")
  $(".imdbLogo").toggleClass("light")
  $(".unselected").toggleClass("light")
  $(".pLogo").toggleClass("light")
  $(".pLogo light").html(`<img src="logo-img/IMDB_Logo_2016.svg">`)
  $(".powered").toggleClass("light")
  $("#showFullListBtn").toggleClass("light")
  $(".modeSwitchBtn").toggleClass("light")
  $(".modeSwitch").toggleClass("light")
}

function resetFilters() {
  selectedStream = [];
  selectedGenre = [];
  selectedRating = "all";
  selectedStarring = "all";
  selectedEra = "all";
}

// Detect stream on click
$(".stream").on("click", function() {
  const removeStream = selectedStream.indexOf($(this).data("stream"));
  if (removeStream > -1 ) {
    selectedStream.splice(removeStream, 1) // remove stream if already in array
    $(this).find("path").addClass('unselected');
  } else {
    selectedStream.push($(this).data("stream")); // add stream to array
    $(this).find("path").removeClass('unselected');
  }
  console.log(selectedStream)
})

// Detect genre on click
$(".genre").on("click", function() {
  const removeGenre = selectedGenre.indexOf($(this).data("genre"));
  if (removeGenre > -1 ) {
    selectedGenre.splice(removeGenre, 1) // remove stream if already in array
    $(this).removeClass('selectedFilter');
  } else {
    selectedGenre.push($(this).data("genre")); // add stream to array
    $(this).addClass('selectedFilter');
  }
  console.log(selectedGenre)
})

// Rating slider
var slider = document.getElementById("ratingSlider");
var output = document.getElementById("ratingValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
//From https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_rangeslider

$("#ratingSlider").on("mouseup", function() {
  selectedRating = ratingSlider.value
  console.log(ratingSlider.value)
})


// Detect era on click
$(".era").on("click", function() {
  selectedEra = $(this).data("era");
  $(".era").removeClass('selectedFilter');
  $(this).addClass('selectedFilter');
  console.log(selectedEra)
})

// Show correct logo for random movieInfoEra
function showCorrectMovieLogo() {
  movieLogo = randomMovie.title
  if (movieLogo === randomMovie.title) {
    var url = encodeURI(`movie-logo/${movieLogo}.svg`)
    $(".movieLogo").append(`<img src="${url}">`)
  }
}

// show correct stream logo
function displayStreamLogo() {
  for(i in randomMovie.stream) {
    streamLogo = randomMovie.stream[i]
    if(randomMovie.stream[i] === "Binge") { // Binge logo is png, needs own src url
      $(".rInfoStreams").append(`<img src="logo-img/Binge_logo-free.png">`)
    }
    if (streamLogo != "Binge")
      $(".rInfoStreams").append(`<img src="logo-img/${streamLogo}_logo.svg">`)
  }
}

function writeOutActors() {
  for(i in randomMovie.actors) {
    $(".rInfoStarring").append(`<p>${randomMovie.actors[i]}</p> `)
  }
}

function writeOutGenres() {
  for(i in randomMovie.genre)
  $(".rInfoGenre").append(`<p>${randomMovie.genre[i]}</p>`)
}

//filter all the variables for random movie
function filterMovieListRandom(stream, genre, imdbScore, starring, era) {
  filterMovies = [];
  for(var x of movieList) {
    var filterGenre = false;
    var filterRating;
    var filterStarring;
    var filterEra;
    var filterStream = false;

    for(i=0; i<selectedStream.length; i++) {
      if (x.stream.indexOf(selectedStream[i]) >= 0) { // see if any streams in movieList matches selectedStreams
        filterStream = true
        break;
      }
    }

    for(i=0; i<selectedGenre.length; i++) {
      if (x.genre.indexOf(selectedGenre[i]) >= 0) { // see if any streams in movieList matches selectedStreams
        filterGenre = true
        break;
      }
    }

    // if (genre == "all") { filterGenre = true; }
    if (imdbScore == "all") { filterRating = true; }
    if (starring == "all") { filterStarring = true; }
    if (era == "all") { filterEra = true; }

    // if (genre != "all") {
    //   filterGenre = x.genre.includes(genre);
    // }
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
    }
  }

  randomMovie = filterMovies[Math.floor(Math.random() * filterMovies.length)];
  if(randomMovie === undefined) {
    $("#noMovies").show(); // if no movies matches, show "No movies match" message
    $(document.body).css("overflow-y", "hidden")
  }
  if(randomMovie != undefined) {
    $("#randomDiv").css('display', 'grid'); // if match, show div for random movie and add info
    showCorrectMovieLogo();
    displayStreamLogo();
    writeOutActors();
    writeOutGenres();
    $(".movieInfoTitle").append(`<h1>${randomMovie.title}</h1>`)
    $(".rInfoPlot").append(randomMovie.plot)
    $(".rInfoRating").append(`<p>${randomMovie.imdbScore}</p>`)
    $(".videoContainer").append(randomMovie.trailer)
    $(".movieInfoEra .rightIn-col").append(randomMovie.era)
    $(document.body).css("overflow-y", "hidden")
  }
}

// Generate the random movie
function generateRandomMovie () {
  filterMovieListRandom(selectedStream, selectedGenre, selectedRating, selectedStarring, selectedEra);
}

// Show the div with the random movie
$("#showRandomMovieBtn").on("click", function() {
      generateRandomMovie();
});
// Hide on click
$(".close").mouseup(function(e){
  $("#randomDiv").hide();
  $("#noMovies").hide();
  $(".movieLogo").html("");
  $(".movieInfoTitle").html("");
  $(".rInfoPlot").html("");
  $(".rInfoStreams").html("");
  $(".rInfoStarring").html("");
  $(".rInfoGenre").html("");
  $(".rInfoRating").html("");
  $(".videoContainer").html("");
  $(".movieInfoEra .rightIn-col").html("");
  $(".movieReel").css({"display":"flex", "opacity":"1"});
  $(document.body).css("overflow-y", "scroll")
});

// ########################### LIST VIEW ###########################

// Filter for list of movies
function filterMovieList(stream, genre, imdbScore, starring, era) {
  filterMovies = [];
  for(var x of movieList) {
    var filterGenre = false;
    var filterRating;
    var filterStarring;
    var filterEra;
    var filterStream = false;

    for(i=0; i<selectedStream.length; i++) {
      if (x.stream.indexOf(selectedStream[i]) >= 0) {
        filterStream = true
        break;
      }
    }

    for(i=0; i<selectedGenre.length; i++) {
      if (x.genre.indexOf(selectedGenre[i]) >= 0) { // see if any streams in movieList matches selectedStreams
        filterGenre = true
        break;
      }
    }

    // reset all filters to show all movies
    // if (genre == "all") { filterGenre = true; }
    if (imdbScore == "all") { filterRating = true; }
    if (starring == "all") { filterStarring = true; }
    if (era == "all") { filterEra = true; }

    // define selected filters
    // if (genre != "all") {
    //   filterGenre = x.genre.includes(genre);
    // }
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
    }
  }
  console.log(filterMovies)
  if(filterMovies.length < 1) {
    $("#noMovies").show(); // show no matching movies message if filterMovies is empty
  }
  if(filterMovies.length >= 1) {

    $("#fullListDiv").show();
// Trying to get the right stream logos in list
  for(i in filterMovies) {
    moviePosterTitle = filterMovies[i].title
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

    const url = encodeURI(`posters/${moviePosterTitle}_thumb.jpg`)

    $(".fullList").append(`<div class="listRow">
    <div class="left-col">
    <div class="rowTitle"><h1>${filterMovies[i].title}</h1></div>
    </div>
    <div class="right-col">
    <div class="rating"><img src="logo-img/IMDB_Logo_2016.svg"> Score: ${filterMovies[i].imdbScore}</div>
    <div class="listPoster"><img src="${url}"></div>
    </div>`)
    $(".listRow .left-col").eq(i).append(streamingbox);
    $(document.body).css("overflow-y", "hidden")
  }
  }
}

// generate list of filtered movies
function generateFullList() {
  filterMovieList(selectedStream, selectedGenre, selectedRating, selectedStarring, selectedEra);
}

// show the div with the list
$("#showFullListBtn").on("click", function() {
  generateFullList();
});

// hide div on click #shadowDiv
$(".close").mouseup(function(e) {
    $("#fullListDiv").hide();
    $(".fullList").html("");
    $(".movieReel").css({"display":"flex", "opacity":"1"});
    $(document.body).css("overflow-y", "scroll")
})

// hide noMovies div on click outside the box
$("#noMovies").mouseup(function(e){
  var noMovieMatching = $(".noMovieMatching");
  if(!noMovieMatching.is(e.target) && noMovieMatching.has(e.target).length === 0) {
    $("#noMovies").hide();
    $(".movieLogo").html("");
    $(".movieInfoTitle").html("");
    $(".rInfoPlot").html("");
    $(".rInfoStreams").html("");
    $(".rInfoStarring").html("");
    $(".rInfoGenre").html("");
    $(".rInfoRating").html("");
    $(".videoContainer").html("");
    $(".fullList").html("");
    $(".movieReel").css({"display":"flex", "opacity":"1"});
    $(document.body).css("overflow-y", "scroll");
    resetFilters();
  }
});





// asd
