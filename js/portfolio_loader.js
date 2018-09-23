$(document).ready(function() {
// VARIABLES

// FUNCTIONS
  function load_animation() {
    for(var i=0; i<animationDB.length; i++) {
      let currProject = "\
      <section id='animation" + i + "' class='project'>\
        <a target='_blank' href='" + animationDB[i].url + "'><img class='thumbnail' alt='" + animationDB[i].title + "' src='" + animationDB[i].url + "' /></a>\
        <section class='text-box caption'>\
          <h1>" + animationDB[i].title + "</h1>\
          <ul>\
            <li>* " + animationDB[i].caption + "</li>\
          </ul>\
        </section>\
      </section>";
      $("#animation").append(currProject);
    }
  }

  function load_digital() {
    for(var i=0; i<digitalDB.length; i++) {
      let currProject = "\
      <section id='digital" + i + "' class='project'>\
        <a target='_blank' href='" + digitalDB[i].url + "'><img class='thumbnail' alt='" + digitalDB[i].title + "' src='" + digitalDB[i].url + "' /></a>\
        <section class='text-box caption'>\
          <h1>" + digitalDB[i].title + "</h1>\
          <ul>\
            <li>* " + digitalDB[i].caption + "</li>\
          </ul>\
        </section>\
      </section>";
      $("#digital").append(currProject);
    }
  }

  function load_traditional() {
    for(var i=0; i<traditionalDB.length; i++) {
      let currProject = "\
      <section id='traditional" + i + "' class='project'>\
        <a target='_blank' href='" + traditionalDB[i].url + "'><img class='thumbnail' alt='" + traditionalDB[i].title + "' src='" + traditionalDB[i].url + "' /></a>\
        <section class='text-box caption'>\
          <h1>" + traditionalDB[i].title + "</h1>\
          <ul>\
            <li>* " + traditionalDB[i].caption + "</li>\
          </ul>\
        </section>\
      </section>";
      $("#traditional").append(currProject);
    }
  }

  function load_sketches() {
    for(var i=0; i<sketchesDB.length; i++) {
      let currProject = "\
      <section id='sketch" + i + "' class='project'>\
        <a target='_blank' href='" + sketchesDB[i].url + "'><img class='thumbnail' alt='" + sketchesDB[i].title + "' src='" + sketchesDB[i].url + "' /></a>\
        <section class='text-box caption'>\
          <h1>" + sketchesDB[i].title + "</h1>\
          <ul>\
            <li>* " + sketchesDB[i].caption + "</li>\
          </ul>\
        </section>\
      </section>";
      $("#sketches").append(currProject);
    }
  }

  function load_portfolio() {
    load_animation();
    load_digital();
    load_traditional();
    load_sketches();
  }

// MAIN RUN
  load_portfolio();

});
