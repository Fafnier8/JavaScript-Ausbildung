$("h1").addClass("big-title margin-50");
$("h1").text("Bye");
$("button").text("Don't click me!");
//$("button").html(<em>Hey</em>);

// Get value of attribute
//$("img").attr("src");

// Change attribute of element
//$("a").attr("href", "https://www.yahoo.com")

// Add EventListener to elements

$("h1").click(function (){
    $("h1").css("color", "purple");
})

$("button").click(function ()
{
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})

// Do smth when pressing down
$(document).keydown( function (event)
{
    $("h1").text(event.key);
});

// Do smth when hover over
$("h1").on("mouseover", function ()
{
    $("h1").css("color", "purple");
})

// add new elements before or after an element

$("h1").before("<button>New</button")

// prepend adds element inside an element inside an element at the beginning and append at the end after the comment

// .remove() removes element

// .hide() to hide elements
// .show() to make it reappear
// just .toggle() to switch
// .fadeOut() to reduce opacity until vanished
// .fadeIn() to fade in
// .fadeToggle what you expect
// .slideUp .slideDown .slideToggle
// .animate({opacity: 0.5}); to change elements that work with numbers like opacity or margin
//