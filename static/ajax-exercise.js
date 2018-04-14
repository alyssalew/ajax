"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    function replaceFortune(results) {
        $("#fortune-text").html(results);
    }
    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function(results){
        $("#weather-info").text(results.forecast);
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    function melonMessage(results) {
        $("#order-status").text(results.msg);
        if (results.code === "ERROR") {
            $("#order-status").addClass("order-error");
        }
        else {
            $("#order-status").removeClass("order-error");
        }
    }

    // TODO: show the result message after your form
    let formData = {"melon_type": $("#melon-type-field").val(),
                    "qty": $("#qty-field").val()};
    $.post("/order-melons.json", formData, melonMessage);
    console.log("It's Melon Time!");

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

}

$("#order-form").on('submit', orderMelons);


