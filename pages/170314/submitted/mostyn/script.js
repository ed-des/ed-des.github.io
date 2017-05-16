$(function() {

   $("body").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });

});

	var frameNumber = 0, // start video at frame 0
	   // lower numbers = faster playback
	   playbackConst = 500,
	   // get page height from video duration
	   setHeight = document.getElementById("set-height"),
	   // select video element        
	   vid = document.getElementById('v0');
	   // var vid = $('#v0')[0]; // jquery option

	// dynamically set the page height according to video length
	vid.addEventListener('loadedmetadata', function() {
	 setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
	});


	// Use requestAnimationFrame for smooth playback
	function scollPlay(){  
	 var frameNumber  = window.pageYOffset/playbackConst;
	 vid.currentTime  = frameNumber;
	 window.requestAnimationFrame(scollPlay);
	}

	window.requestAnimationFrame(scollPlay);



/* DROP DOWN MENU CONTAINER/TOGGLE

When the user clicks on the button toggle between hiding and showing the dropdown content */
	function dropMenu(){
		document.getElementById("myDropdown")
		.classList.toggle("show");
	}

	//Close the dropdown if the user clicks outside of it
	window.onclick = function(event){
		if (!event.target.matches('.dropbtn')) {

			var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i = 0; i < dropdowns.length; i++){
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	}

/* DROP DOWN MEN TRIGGER ON SCROLL */


		$(document).scroll(function() {
			var y = $(this).scrollTop();
			  if (y > 1200) {
			    $('.dropbtn').fadeIn();
			  } else {
			    $('.dropbtn').fadeOut();
		  }
	});

/*TOGGLE FAQS*/
	function toggleQuestion1() {
	    var x = document.getElementById('answer1');
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
	};
	function toggleQuestion2() {
	    var x = document.getElementById('answer2');
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
	};
	function toggleQuestion3() {
	    var x = document.getElementById('answer3');
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
	};
	function toggleQuestion4() {
	    var x = document.getElementById('answer4');
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
	};

/*TOOLTIP HOVER IMAGES FOR READINGS*/
	var tooltips = document.querySelectorAll('.tooltip span');

	window.onmousemove = function (e) {
	    var x = (e.clientX + 0) + 'px',
	        y = (e.clientY - 200) + 'px';

	    for (var i = 0; i < tooltips.length; i++){
	    	tooltips[i].style.top = y;
	    	tooltips[i].style.left = x;
	    }
	};


/* DROPDOWN */
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].onclick = function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	  }
	}