/*JQuery Cheat Sheet

DOM: Document Object Model— the html that is the basis of a web page; 
can be easily manipulated with jquery


PARTS OF JQUERY CODE

  selector   function that tell your html element what to do
  	 |			|
$("#drop").slideToggle("slow");
| 						  |
shorthand for selecting   attribute
connected jquery library


			tells web page to fire jquery events once all of the DOM is loaded
			  |
$(document).ready(function(){});


ANONYMOUS FUNCTIONS
-an anonymous function allows the specific jquery code it's being applied to to execute first

function(){
alert("I am anonymous!");
}


CALLBACKS
-an anonymous function supplied to another function to 
be run when that function is done running (otherwise there may be errors in your code)

$("circle").click(function(){
    $("p").hide("slow", function(){  
    });
});


CLICK EVENT

A function used in jquery that causes a piece of jquery to fire once the element is clicked.
$("#top").click(function(){
        $("#drop").slideToggle("slow");
    });
	-in this example .click is a function of #top. When you click the #top element in your
	web page, the #drop element's .slideToggle function will be activated





*/




$(document).ready(function(){


	$("#circle").animate({"left":"+=100vw"});

	// $(".circleTwo").animate("bounce", { times:5 });
	$("#top").click(function(){
        $("#drop").slideToggle("slow");
    });

	$(".hide").click(function(){
		$("#square").hide(1000);
	});

	$("img").hide();
	

	$(".show").click(function(){
		$("img").fadeIn(2000);
	});



	
	


















});