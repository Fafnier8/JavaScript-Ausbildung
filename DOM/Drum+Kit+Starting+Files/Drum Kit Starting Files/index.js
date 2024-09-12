let btn = document.querySelectorAll (".drum");
var keySet = ["w", "a", "s", "d", "j", "k", "l"]

btn.forEach (element => element.addEventListener ("click",
        function ()
        {
            DrumKit(this.innerHTML);
            ButtonAnimation(this.innerHTML);
        }
    )
)

document.addEventListener ("keydown",
        function (event)
        {
            DrumKit(event.key);
            ButtonAnimation(event.key);
        }
);

function DrumKit(event)
{
    switch (event)
    {
        case "w":
            var crash = new Audio ("./sounds/crash.mp3");
            crash.play ();
            break;

        case "a":
            var kickBass = new Audio ("./sounds/kick-bass.mp3");
            kickBass.play ();
            break;

        case "s":
            var snare = new Audio ("./sounds/snare.mp3");
            snare.play ();
            break;

        case "d":
            var tom1 = new Audio ("./sounds/tom-1.mp3");
            tom1.play ();
            break;

        case "j":
            var tom2 = new Audio ("./sounds/tom-2.mp3");
            tom2.play ();
            break;

        case "k":
            var tom3 = new Audio ("./sounds/tom-3.mp3");
            tom3.play ();
            break;

        case "l":
            var tom4 = new Audio ("./sounds/tom-4.mp3");
            tom4.play ();
            break;

        default:
            console.log (event);
    }
}

function ButtonAnimation(currentKey)
{
    if (keySet.includes(currentKey))
    {
        var activeButton = document.querySelector("." + currentKey)
        activeButton.classList.toggle("pressed");
        setTimeout(function(){
            activeButton.classList.toggle("pressed");
        }, 100);
    }
}