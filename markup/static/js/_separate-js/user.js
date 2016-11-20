$(document).ready(function(){
    
	$('.js-main-slider').slick({				
		speed: 300,
		slidesToShow: 7,
		slidesToScroll: 1,
		// autoplay: true,
  // 		autoplaySpeed: 3000,
  		draggable: false,
		responsive: [
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
		// autoplay: true,
  // 		autoplaySpeed: 4000,
  		draggable: false,
		responsive: [
			{
			  breakpoint: 1280,
			  settings: {
			    slidesToShow: 5,			    
			  }
			},
			{
			  breakpoint: 1010,
			  settings: {
			    slidesToShow: 4,			    
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
			    slidesToShow: 3,			    
			  }
			},
			{
			  breakpoint: 600,
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

});