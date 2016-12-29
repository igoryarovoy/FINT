$(document).ready(function(){

    
	$('.js-main-slider').slick({				
		speed: 300,
		slidesToShow: 10,
		slidesToScroll: 1,		
  		draggable: false,
		responsive: [
			{
			  breakpoint: 1500,
			  settings: {
			    slidesToShow: 9,			    
			  }
			},
			{
			  breakpoint: 1200,
			  settings: {
			    slidesToShow: 7,			    
			  }
			},
			{
			  breakpoint: 1024,
			  settings: {
			    slidesToShow: 5,			    
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
			    slidesToShow: 4,			    
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
			    slidesToShow: 3,			    
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    slidesToShow: 2,			    
			  }
			}			
		]
	});

	$('.js-card-slider').slick({				
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,		
  		draggable: false,
		responsive: [
			{
			  breakpoint: 1500,
			  settings: {
			    slidesToShow: 5,			    
			  }
			},
			{
			  breakpoint: 1400,
			  settings: {
			    slidesToShow: 4,			    
			  }
			},
			{
			  breakpoint: 1280,
			  settings: {
			    slidesToShow: 3,			    
			  }
			},			
			{
			  breakpoint: 800,
			  settings: {
			    slidesToShow: 2,			    
			  }
			},			
			{
			  breakpoint: 480,
			  settings: {
			    slidesToShow: 1,			    
			  }
			}			
		]
	});

	$('.js-cardSm-slider').slick({				
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,		
  		draggable: false,
		responsive: [
			{
			  breakpoint: 1400,
			  settings: {
			    slidesToShow: 4		    
			  }
			},
			{
			  breakpoint: 1280,
			  settings: {
			    slidesToShow: 3		    
			  }
			},			
			{
			  breakpoint: 800,
			  settings: {
			    slidesToShow: 2	    
			  }
			},			
			{
			  breakpoint: 480,
			  settings: {
			    slidesToShow: 2			    
			  }
			},			
			{
			  breakpoint: 375,
			  settings: {
			    slidesToShow: 1
			  }
			}			
		]
	});


	$('.js-gallery-screen').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-gallery-nav'
	});
	$('.js-gallery-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-gallery-screen',				
		focusOnSelect: true,
		centerMode: true
	});


	$('.js-quick-view').on('shown.bs.collapse', function () {
		parentCollapseActive('.js-card-adaptive');	
	});
	$('.js-quick-view').on('hidden.bs.collapse', function () {		
		parentCollapseRemoveActive('.js-card-adaptive')
	});

	$('.js-collapse-filter').on('shown.bs.collapse', function () {	
		parentCollapseActive('.js-panel-filter');
	});
	$('.js-collapse-filter').on('hidden.bs.collapse', function () {	
		parentCollapseRemoveActive('.js-panel-filter')	
	});

});


function parentCollapseActive(selector) {
	$(selector+' [aria-expanded="true"]').parents(selector).addClass('is-active');
}
function parentCollapseRemoveActive(selector) {
	$(selector+' [aria-expanded="false"]').parents(selector).removeClass('is-active');
}

$(window).on("load",function(){
    $(".js-scroll-wrapper").mCustomScrollbar();
});
