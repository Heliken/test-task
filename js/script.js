$( document ).ready(function() {


	$(".order-switch>.order-switch-unit").click(function(){
		if (!($(this).hasClass("active"))){
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
			$(".order-main>.toggle").toggle();
		}
	});

	$(".next-button").click(function(e){
		e.preventDefault();
		 var a= $(this).parents(".slide");
		 var b=$(this).parents(".slide-wrap");
		 if (a.hasClass("slide-1")){
		 	b.css("left","-1280px");
		 } else if(a.hasClass("slide-2")){
		 	b.css("left","-2560px");
		 }
	});

	$(".button-prev").click(function(e){
	 	e.preventDefault();
		var a= $(this).parents(".slide");
		var b=$(this).parents(".slide-wrap");
		if (a.hasClass("slide-2")){
		 	b.css("left","0px");
		 // } else if(a.hasClass("slide-2")){
		 // 	b.css("left","-2560px");
		 // }
		}
	});

	$(".button-return").click(function(){
		var b=$(this).parents(".slide-wrap");
		b.css("left","0px");
	});
	$(".remove").click(function(){
		a=$(this).parents(".order-2-unit");
		a.css("width","0")
		setTimeout(function() {
			a.css("border","none");
		}, 300);
		setTimeout(function() {
			a.remove();
		}, 300);
	});

	$(".events-info-button").click(function(){
		$(".popup-wrapper").css("left","0px");
		$(".popup").addClass("popup-visible");
	});

	$('.popup-slide-1 .popup-form-input-submit').click(function(e){
		e.preventDefault();
		$(".popup-wrapper").css("left","-400px");
	});
	$(".popup-info-send").click(function(){
		a=$(".popup-info form");
		console.log(a);
		a.css("height","54px");

	});
	
	$(".popup-close,.close-popup").click(function(){
		$(".popup").removeClass("popup-visible");
	});

	$(".month").click(function(){
		$(this).addClass("month-open");
	});

	$(".month>ul>li").click(function(e){
		e.stopPropagation();
		$(".month").removeClass("month-open");
		var radioValue=$(this).text();
    	$(".month").children("span").text(radioValue);

	});

});