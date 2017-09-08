function Swipe(contents){
	var swipe = {}
	var screem = $("#screem")
	var scr_in = $(".scr_in")
	var scrLi = contents.find("li")
	var width = screem.width()
	var height = screem.height()
	
	$.each(scrLi.find("img"),function(index){
		scrLi.find("img").eq(index).css("height",height+"px")
	})
	scr_in.css({
		width:(scrLi.length*scrLi.width()+"px"),
		height:height+"px",
		left:"0px"
	}) 

	$("#boy").css({
		top:height*0.53+"px",
		left:"-3%",
		width:height*0.145+"px"
	})
	$("#boy img").css("height",height*0.28+"px")
	$("#girl").css({
		top:height*0.408+"px",
		left:height*0.76+"px",
		width:height*0.145+"px"
	})
	$("#girl img").css({
		height:height*0.28+"px",
		left:-height*0.145+"px"
	})
	//花瓣
	$(".flower").css({
		width:height*1.6+"px",
		height:"100%",
		right:"0px",
		top:0
	})
	//水
	$(".water1").css({
		top:height*0.793+"px",
		left:height*0.65+"px",
		width:height*0.2+"px"
	})
	$(".water1 img").css("height",height*0.015+"px")
	$(".water2").css({
		top:height*0.82+"px",
		left:height*0.7+"px",
		width:height*0.26+"px"
	})
	$(".water2 img").css("height",height*0.01+"px")
	$(".water3").css({
		top:height*0.88+"px",
		left:height*0.54+"px",
		width:height*0.4+"px"
	})
	$(".water3 img").css("height",height*0.03+"px")
	$(".water4").css({
		top:height*0.93+"px",
		left:height*0.62+"px",
		width:height*0.45+"px"
	})
	$(".water4 img").css("height",height*0.013+"px")
	//星星
	$(".star1").css({
		left:height*0.54+"px",
		top:height*0.15+"px"
	})
	$(".star2").css({
		left:height*0.52+"px",
		top:height*0.3+"px"
	})
	$(".star3").css({
		left:height*0.57+"px",
		top:height*0.19+"px"
	})
	$(".star4").css({
		left:height*1.02+"px",
		top:height*0.12+"px"
	})
	$(".star5").css({
		left:height*1.06+"px",
		top:height*0.27+"px"
	})
	$(".star6").css({
		left:height*1.1+"px",
		top:height*0.38+"px"
	})
	$(".star1 img,.star2 img,.star3 img,.star4 img,.star5 img,.star6 img").css({
		height:height*0.05+"px"
	})
	//门
	$(".door1").css({
		top: height*0.482+"px",
		left: height*0.834+'px',
		width: ($(".door1 img").height())*0.1+'px'
	})
	$(".door1 img").css({
		height: height*0.235+'px',
		width: ($(".door1 img").height())*0.1+'px'
	})
	$(".door2").css({
		top: height*0.482+"px",
		left: height*0.935+'px',
		width: ($(".door2 img").height())*0.1+'px'
	})
	$(".door2 img").css({
		height: height*0.235+'px',
		width: ($(".door2 img").height())*0.1+'px'

	})
	//云朵和太阳的位置和大小
	$(".sun").css({
		top:height*0.01+"px",
		left:height*0.9+'px'
	})
	$(".sun img").css({
		height:height*0.28+"px"
	})
	$(".cloud1").css({
		top:height*0.16+"px",
		left:-height*0.1+'px'
		// opacity:0.9
	})
	$(".cloud1 img").css({
		height:height*0.1+"px"
	})
	$(".cloud2").css({
		top:height*0.02+"px",
		left:height*1.28+'px'
		// opacity:0.9
	})
	$(".cloud2 img").css({
		height:height*0.19+"px"
	})

	//第二页面门、灯、小鸟
	$(".bird").css({
		top:height*0.12+"px",
		left:height*1.2+'px',
		width:$(".bird img").height()*0.088+'px'
	})
	$(".bird img").css({
		height: height*0.068+"px"
	})

	// CSS3 动画
	swipe.scrollTo = function(x,speed){
		// boyLeft()
		scr_in.css({
			'transition-timing-function':'linear',
			'transition-duration':speed + 'ms',
			'transform':'translate3d(-' + x + 'px,0,0)',

			'-webkit-transition-timing-function':'linear',
			'-webkit-transition-duration':speed + 'ms',
			'-webkit-transform':'translate3d(-' + x + 'px,0,0)',
			'-moz-transition-timing-function':'linear',
			'-moz-transition-duration':speed + 'ms',
			'-moz-transform':'translate3d(-' + x + 'px,0,0)',
			'-ms-transition-timing-function':'linear',
			'-ms-transition-duration':speed + 'ms',
			'-ms-transform':'translate3d(-' + x + 'px,0,0)',
			'-o-transition-timing-function':'linear',
			'-o-transition-duration':speed + 'ms',
			'-o-transform':'translate3d(-' + x + 'px,0,0)',
		})
		
		return this  
	} 
	return swipe
}

	// -webkit-
	// -moz-
	// -ms-
	// -o-
