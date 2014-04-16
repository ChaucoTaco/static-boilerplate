var boilerplateGlobal = (function($){

	var $navButton = $('.nav-button'),
		$nav = $('nav');

	var init = function(){
		bindEvents();
	},

	bindEvents = function() {
		$navButton.on('click', function(){
			$nav.toggleClass('opened-nav');
		});
	};

	return {
		init: init
	};

})(jQuery);

boilerplateGlobal.init();