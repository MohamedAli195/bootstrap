$(document).ready(function(){


	$('html').niceScroll();
	//carousel
	$('.carousel').carousel({
		interval:5000
	});
	$('.gear-icon').click(function(){
		$('.color-box').fadeToggle();
	});	
		$('.color-box ul li')
		.eq(0).css("backgroundColor","#E41B17").end()
		.eq(1).css("backgroundColor","#11d505").end()  
		.eq(2).css("backgroundColor","#3007d1").end()
		.eq(3).css("backgroundColor","#8730e6").end()  
		.eq(4).css("backgroundColor","#bfc304");
	$('.color-box ul li').click(function(){
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	});
	//btn scroll top
	var scrollbtn =$('#scroll-top');
	$(window).scroll(function(){
		if($(this).scrollTop() >= 700){
			scrollbtn.show();
		}else{
			scrollbtn.hide();
		}

	scrollbtn.click(function(){
			$("html,body").animate(
				{scrollTop : 0},1000);
		});	
	});
});
$(window).on('load',function(){
		$('.mmm').fadeOut(2000,function(){
			$('body').css('overflow','auto');
		});
});