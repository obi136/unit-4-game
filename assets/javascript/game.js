var targetNumber = Math.floor(Math.random() * 100) + 30;

$("#numberToGuess").html(targetNumber);

var counter = 0;

var numberOptions = [3, 6, 9, 12];

var wins = 0;

// $("#win").html(wins);

var losses = 0;

// $("#loss").html(losses);

$(".crystal-image").each(function(index){
    $(this).attr("data-crystalvalue", numberOptions[index])
})



// for (var i = 0; i < numberOptions.length; i++){
//     var imageCrystal = $("<img>");

//     imageCrystal.addClass("crystal-image");

//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     $("#crystals").append(imageCrystal);
// }

$(".crystal-image").on("click", function() {
    console.log("hit")
    var crystalValue = ($(this).attr("data-crystalvalue"));
    console.log(this);
    console.log(crystalValue);
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    // alert("New score: " + counter);
    $("#score").html(counter);

    if (counter === targetNumber) {
        alert("You win");
        wins++;
        $("#win").html(wins);
        counter = 0;
        $("#score").html(0);
        targetNumber = Math.floor(Math.random() * 100) + 30;
        $("#numberToGuess").html(targetNumber);

    }
    else if( counter >= targetNumber) {
        alert ("You Lose");
        losses++;
        $("#loss").html(losses);
        counter = 0;
        $("#score").html(0);
        targetNumber = Math.floor(Math.random() * 100) + 30;
        $("#numberToGuess").html(targetNumber);
    }
});