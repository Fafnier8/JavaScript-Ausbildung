var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var sounds = new Map;

    sounds.set("blue", "sounds/blue.mp3");
    sounds.set("green", "sounds/green.mp3");
    sounds.set("red", "sounds/red.mp3");
    sounds.set("wrong", "sounds/wrong.mp3");
    sounds.set("yellow", "sounds/yellow.mp3");

function NextSequenz()
{
    var rndNum = Math.floor(Math.random() * 4);
    //console.log(rndNum);
    return rndNum;
}

function RandomChosenColor()
{
    rndColour = buttonColours[NextSequenz()];
    gamePattern.push(rndColour);
}

function ButtonPress(value){
    $("#" + value).animate({opacity: 0}).animate({opacity: 100});
    var sound = new Audio(sounds.get(value));
    sound.play();
}

$(document).keydown( function ()
{

})
/*
$(button).keydown( function (event)
{

})
*/
