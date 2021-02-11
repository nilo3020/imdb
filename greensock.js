// Greensock



var tl = gsap.timeline({});

$("#showRandomMovieBtn").on("click", function() {

  var pageWidth = $(window).width()/2;
  var pageHeight = $(window).height()/2;
  console.log ("pageWidth: " + pageWidth + " pageHeight: " + pageHeight)
  var pageMarginW = ($(".content").width() - $(".rContent").width())/2;
  var pageMarginH = ($(window).height() - $(".rContent").height())/2;
  console.log("ContentW: " + $(".content").width() + " rContentW: "+ $(".rContent").width() + " PagemarginW: " + pageMarginW);
  console.log("ContentH: " + $(".content").height() + " rContentH: "+ $(".rContent").height() + " PagemarginH: " + pageMarginH);
  var logoWidth = $(".movieLogo").width()/2;
  var logoHeight = $(".movieLogo").height()/2;
  console.log("logW: " + logoWidth + " logH: " + logoHeight)

  var logoScale = 2
  if ($(document).width() < 700) {
    logoScale = 1.3
  }
  if ($(document).width() < 600) {
    logoScale = 1
  }
  console.log($(document).width())
  var centerWidth = pageWidth - logoWidth - pageMarginW;
  var centerHeight = pageHeight - logoHeight - pageMarginH;

  tl.from(".movieReel", {opacity: 0, duration: 1});
  tl.from(".movieReel img", {rotate: -1080, duration: 3}, "-=1");
  tl.to(".movieReel", {opacity: 0, duration: 0.2}, "-=0.5");
  tl.to(".movieReel", {display: "none", duration: 0}, "-=0.1");
  tl.to(".rContent", {display: "block", duration: 0});
  tl.to(".movieLogo", {display: "flex", duration: 0});
  tl.fromTo(".movieLogo",
    {x: centerWidth, y: centerHeight, scale: 0, opacity: 0, ease: "back.inOut(1.7)"},
    {x: centerWidth, y: centerHeight, scale: logoScale, opacity: 1, duration: 1, ease: "back.inOut(1.1)" });
  tl.fromTo(".movieLogo",
    {x: centerWidth, y: centerHeight, scale: logoScale},
    {x: 0, y: 0, scale: 1, duration: 1, ease: "power4.inOut"},"+=1.5");
  tl.from("#randomDiv", {height: "100%"});
  tl.from(".movieInfo", {opacity: 0, duration: 0.2});
  tl.from(".rInfoPlot", {y: -20, duration: 0.5, opacity: 0})
  tl.from(".rInfoStarring", {y: -20, duration: 0.5, opacity: 0},"-=0.2")
  tl.from(".rInfoRating", {y: -20, duration: 0.5, opacity: 0},"-=0.2")
  tl.from(".rInfoGenre", {y: -20, duration: 0.5, opacity: 0},"-=0.2")

  tl.from(".videoContainer", {opacity: 0, duration: 1});
  tl.from(".movieInfoStreams", {opacity: 0, duration: 0.5}, "-=1");
  tl.from(".rInfoStreams img", {opacity: 0, duration: 0.5, y: 20, stagger: 0.2});
  tl.from(".close", {opacity: 0, duration: 0.2, ease: "power1.inOut"});
});

$("#showFullListBtn").on("click", function() {
  tl.from(".movieReel", {opacity: 0, duration: 1});
  tl.from(".movieReel img", {rotate: -1080, duration: 3}, "-=1");
  tl.to(".movieReel", {opacity: 0, duration: 0.2}, "-=0.5");
  tl.to(".movieReel", {display: "none", duration: 0}, "-=0.1");
  tl.to(".fullList", {display: "block", duration: 0});
  tl.from(".listRow", {opacity: 0, duration: 0.3, stagger: 0.3});
})

$("#showRandomMovieBtn").on("click", function() {
  tl.from(".noMovieMatching", {y: -100});
})

// Comment
