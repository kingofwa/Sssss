(function ($) {
 "use strict";
		//---------------------------------------------
		//QA  slider
		//---------------------------------------------
			 $('#ensign-nivoslider').nivoSlider({
				effect: 'random',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 600,
				pauseTime: 7000,
				startSlide: 0,
				directionNav: false,
				controlNavThumbs: false,
				pauseOnHover: false,
				manualAdvance: false
			 });
})(jQuery); 