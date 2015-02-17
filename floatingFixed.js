/*
 * Floating-Fixed v1.0
 *
 * Hwang Cheolmin
 * Copyright 2015, MIT License
 *
*/
(function( $ ) {

$.fn.fixedFloating = function(options) {
	var options = $.extend({
		floatingMargin : "0",
		fixedDirection : "LT",
		limitTop : 0,
		limitBottom : 0,
		stickyCenterAlign : false,
		centerElement : "#center-element"
	}, options);

	return this.each(function(){
		var obj = $(this);
		var element = $(options.centerElement);

		var directionX = options.fixedDirection[0].toUpperCase();
		var directionY = options.fixedDirection[1].toUpperCase();

		var marginArray = options.floatingMargin.split(" ");
		var marginT = (marginArray[0]) ? parseFloat(marginArray[0]) : 0;
		var marginR = (marginArray[1]) ? parseFloat(marginArray[1]) : marginT;
		var marginB = (marginArray[2]) ? parseFloat(marginArray[2]) : marginT;
		var marginL = (marginArray[3]) ? parseFloat(marginArray[3]) : (marginR) ? marginR : marginT;
		var addT = 0;
		var addR = 0;
		var addB = 0;
		var addL = 0;
		
		obj.css("position","fixed");
		$(window).on("resize",eventWindowResize);
		$(window).on("scroll",eventWindowScroll);

		resetObjPositionLR();
		resetObjPositionTB();
		setObjPosition();

		function eventWindowResize() {
			resetObjPositionLR();
		}

		function eventWindowScroll() {
			resetObjPositionTB();
		}

		function resetObjPositionTB() {
			limitCalculation();
			setObjPosition();
		}

		function limitCalculation() {
			if (options.limitBottom && directionY == "B") {
				var lb = $("body").height() - ($(window).scrollTop() + $(window).height());
				if (lb < options.limitBottom) {
					addB = options.limitBottom - lb;
				} else {
					addB = 0;
				}
			}
			if (options.limitTop && directionY == "T") {
				if (options.limitTop > $(window).scrollTop()) {
					addT = options.limitTop - $(window).scrollTop();
				} else {
					addT = 0;
				}
			}
		}

		function resetObjPositionLR() {
			if (options.stickyCenterAlign && element.length > 0) {
				stickyCalculation();
				var a = element.innerWidth() + (obj.innerWidth() + marginL + marginR) * 2;
				if ($(window).width() < a) {
					addL = 0;
					addR = 0;					
				}
			}
			setObjPosition();
		}

		function stickyCalculation() {
			switch (directionX) {
				case "R" : 
					addR = $(window).width() - (element.offset().left + element.innerWidth() + obj.innerWidth() + marginL + marginR);
					break;
				case "L" : 
					addL = element.offset().left - (obj.innerWidth() + marginL + marginR);
					break;
			}
		}

		function setObjPosition() {
			switch (directionX) {
				case "L" : obj.css("left",(marginL + addL) + "px"); break;	
				case "R" : obj.css("right",(marginR + addR) + "px"); break;					
			}
			switch (directionY) {
				case "T" : obj.css("top",(marginT + addT) + "px"); break;
				case "B" : obj.css("bottom",(marginB + addB) + "px"); break;	
			}
		}

	});
}

})( jQuery );