jQuery(document).ready(function(){

	// Function to load Masonry
	function loadMasonry(){
		$('.grid').masonry({
			itemSelector: '.grid-item',
			percentPosition: true,
			columnWidth: '.grid-sizer',
			gutter: 10
		});
	}

	// init Masonry
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer',
		gutter: 10
	});
	// layout Masonry after all the images are loaded
	$grid.imagesLoaded( function() {
		$grid.masonry();
	}); 


	'use strict';
	var $page = $('#main'),
	options = {
	debug: true,
	prefetch: true,
	cacheLength: 2,
	onStart: {
		duration: 250, // Duration of our animation
		render: function ($container) {
			// Add your CSS animation reversing class
			$container.addClass('is-exiting');
			// Restart your animation
			smoothState.restartCSSAnimations();
		}
	},
	onReady: {
		duration: 0,
		render: function ($container, $newContent) {
			// Remove your CSS animation reversing class
			$container.removeClass('is-exiting');
			// Inject the new content
			$container.html($newContent);
			// Load Masonry on dynamically loaded content
			loadMasonry();
			}
		}
	},
	smoothState = $page.smoothState(options).data('smoothState');

	// Navigation animations

	$('.navlink').hover(function(){
		$('.slash').removeClass('tangerine').addClass('black');
	}, function(){
		$('.slash').removeClass('black').addClass('tangerine');
	});


});
