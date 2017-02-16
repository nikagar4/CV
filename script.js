$(document).ready(function(){
	var k = 1;
	$("button").mouseenter(function(){
		$(this).css("color", "#FF9900");
	});
	$("button").mouseleave(function(){
		$(this).css("color","#535353");
		
	});
	$("button").click(function(){
		$(".extraEd").toggle(800);
		//alert($("#educ").position().top);
		if(k%2){
		$("html, body").animate({scrollTop:$("#educ").closest("div").position().top},"slow");
		$("button").text("less");
		} else {
			$("button").text("more");
		}
		k++;
	});
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$("#upArrow").fadeIn();
		} else {
			$("#upArrow").fadeOut();
		}
	});
	
	$("#upArrow").click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});