var BeerReviewApp = function () {
    var beers = [];
  
    var $beerList = $('.beers-list');
  
    var updateBeers = function () {
      $beerList.empty();
  
      for (var i = 0; i < beers.length; i += 1) {
        var beerHTML = "<li>" + beers[i].name + " - " + beers[i].category + "</li>";
  
        $beerList.append(beerHTML);
      }
    };
  
    var addBeer = function (beerName, beerCategory) {
      beers.push({ name: beerName, category: beerCategory });
    };
  
    return {
      updateBeers: updateBeers,
      addBeer: addBeer
    }
  };
  
  var app = BeerReviewApp();
  
  $('.post-beer').on('click', function () {
    var name = $('.beer-input').val();
    var category = $('.category-input').val();
  
    app.addBeer(name, category);
  
    app.updateBeers();
  });