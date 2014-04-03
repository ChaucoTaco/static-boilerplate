var gannetResidence = (function($){
	var init = function(){
		console.log('global');
	};

	return {
		init: init
	};

})(jQuery);

gannetResidence.init();