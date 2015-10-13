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