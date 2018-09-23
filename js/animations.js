$(document).ready(function() {

  var welcome_header = new Typed('#welcome_msg h1', {
    strings: ["Hello Traveler."],
    startDelay: 150,
    typeSpeed: 30,
    showCursor: false,
  });

  var welcome_body = new Typed('#welcome_msg li', {
    strings: ["* Welcome to my shop.", "* I hope you find what you are looking for."],
    startDelay: 1750,
    typeSpeed: 45,
    backDelay: 1000,
    backSpeed: 30,
    showCursor: false,
  });

});
