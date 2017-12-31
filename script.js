var beers = [];
var clicks = 0;

//Post Button
$(".post-beer").click(function () {
    addBeer($(".beer-input").val(), $(".category-input").val(), $('#dropDownId').val());
    renderBeers();
})

//$(".sort-rating").click(sortBeers);
// Sorting button adds 1 to click variable each time it's clicked
$(".sort-rating").click(function () {
    sortBeers();
    clicks ++;
})

function addBeer(name, category, rating) {
    beers.push({ "beerName": name, "beerCategory": category, "beerRating": rating });
}

function clearList() {
    $('.beers-list').empty();
}

function renderBeers() {
    clearList();
    for (var i = 0; i < beers.length; i++) {
        $(".beers-list").append("<li>" + "Beer Name: " + beers[i].beerName + " Beer Category: " + beers[i].beerCategory + " Beer Rating : " + beers[i].beerRating + "</li>")
    }
}

function sortBeers() {
    if (clicks % 2 == 0) {
        beers.sort(function (a, b) {
            return (a.beerRating) - (b.beerRating);
        });

    } else {
        beers.sort(function (a, b) {
            return (b.beerRating) - (a.beerRating);
        });
    }

    renderBeers();
}

