const rp = require('request-promise');

  function pingPrimaryProjects() {
    rp.get("https://pathfinder-2017.herokuapp.com");
    rp.get("https://arwl-book-exchange.herokuapp.com/browse");
    rp.get("https://arwl-stock-tracker.herokuapp.com/main");
    rp.get("https://votogo.herokuapp.com/home");
  }

  function pingSecondaryProjects() {
    rp.get("https://ng-recipe-book.herokuapp.com");
    rp.get("https://arwl-weather.herokuapp.com")
    rp.get("https://calculator-arwl.herokuapp.com");
    rp.get("https://arwl-noughts-and-crosses.herokuapp.com");
    rp.get("https://arwl-game-of-life.herokuapp.com");
    rp.get("https://arwl-image-search.herokuapp.com");
  }

  function pingSelf() {
    console.log("Waking App");
    rp.get("https://alistair-willis.herokuapp.com/overview");
  }

module.exports = { pingPrimaryProjects, pingSecondaryProjects, pingSelf };
