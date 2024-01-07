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




Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});


const videoElement = document.getElementById('video-home');
        videoElement.addEventListener('suspend', () => {
            // suspend invoked
            // show play button
        });

        videoElement.addEventListener('play', () => {
        });
        
        
window.onload = function () {
    const videoElement = document.getElementById('video-home');
    if (videoElement.playing) {
    }
    else {
        // video is not playing
        // so play video now
        videoElement.play();
    }
};