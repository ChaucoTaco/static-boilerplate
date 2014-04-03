var boilerplateGlobal = (function($){
	var init = function(){
		console.log('global');
	};

	return {
		init: init
	};

})(jQuery);

boilerplateGlobal.init();