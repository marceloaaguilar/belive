var controller = new ScrollMagic.Controller();

var revealElements = document.getElementsByClassName("info-icon-service");
		for (var i=0; i<revealElements.length; i++) { 
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], 
								offset: 50,												 
								triggerHook: 0.9,
							})
							.setClassToggle(revealElements[i], "visible")
							.addTo(controller);
                        }


const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
loop: true,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
},

});


                          