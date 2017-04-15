$(document).ready(function(){

	if ( $('.js-bunner-slider').length ) {
    	$('.js-bunner-slider').slick({				
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,		
	  		draggable: false,
	  		dots: true,
	  		arrows: false,
	  		lazyLoad: 'ondemand',
	  		autoplay: true,
  			autoplaySpeed: 5000,
		});
    }

    if ( $('.js-main-slider').length ) {
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
    }

    if ( $('.js-card-slider').length ) {
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
    }


    if ( $('.js-cardSm-slider').length ) {
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
    }

    if ( $('.js-gallery-screen').length ) {
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
    }


	$('.js-quick-view').on('shown.bs.collapse', function () {
		parentCollapseActive('.js-card-adaptive');	
		scrollVisible($(this));
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

	$('#mobile-main-nav').on('shown.bs.collapse', function () {
		$('html, body').addClass('opened-menu-mobile');
	});
	$('#mobile-main-nav').on('hidden.bs.collapse', function () {
		$('html, body').removeClass('opened-menu-mobile');
	});

	$('.js-tg').on('click', function(e) {
		var $this = $(this);
		$this.toggleClass('is-active');
		$('#mobile-main-nav').scrollTop($this.position().top - 15);
	});

	$("#menu").menuAim({
		activate: activateSubmenu,
        deactivate: deactivateSubmenu
	});

	$('.js-main-navigation-scroll a').on('click', function() {
		var parent = $(this).parents('.js-main-navigation-scroll');
		var parentWidth = parent.outerWidth();
		var posLeft = $(this).position().left;
		var width = $(this).outerWidth();

		if ( posLeft+width < parentWidth ) {
			parent.scrollLeft(posLeft);
		}
	});

	createLink('.js-link-span');

	timeOutHover('.js-time-out');
});

function createLink(selector) {
	$(selector).replaceWith(function(){
		return'<a href="'+$(this).data('link')+'" class="'+$(this).attr('class')+'">'+$(this).text()+'</a>';
	});
}

function activateSubmenu(row) {
    var $row = $(row),
        submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId);

    // Show the submenu
    $submenu.addClass('is-active');
    $row.find("> .c-list-nav__btn").addClass("is-hover");
}
function deactivateSubmenu(row) {
    var $row = $(row),
        submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId);
    // Hide the submenu and remove the row's highlighted look
    $submenu.removeClass('is-active');
    $row.find("> .c-list-nav__btn").removeClass("is-hover");
}


function parentCollapseActive(selector) {
	$(selector+' [aria-expanded="true"]').parents(selector).addClass('is-active');
}
function parentCollapseRemoveActive(selector) {
	$(selector+' [aria-expanded="false"]').parents(selector).removeClass('is-active');
}

$(window).on("load",function(){
    $(".js-scroll-wrapper").mCustomScrollbar();
});

function scrollVisible(element) {
	var offset = element.offset(),
		scrollTop = $(window).scrollTop(),
		windowHeight = $(window).height(),
		height = element.outerHeight();

	if ( ( height + offset.top ) > ( scrollTop + windowHeight ) ) {
		$('body,html').animate({scrollTop: offset.top - windowHeight + height + 20}, 300);
	}
}

function timeOutHover(selector, timeOut) {
	var timeHover;
	$(selector).hover(function() {
		var $this = $(this);
		timeHover = setTimeout(function() {
            $this.addClass('is-active');
        }, timeOut || 500);
	}, function() {
		var $this = $(this);
		clearTimeout(timeHover);
		$this.removeClass('is-active');
	})
}
