/*var acc = document.getElementsByClassName("form-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    };
}*/

/*THIS IS THE NAVIGATION BAR EFFECT*/
//(function ($) {
//    $(document).ready(function () {
//        $(window).scroll(function () {
//            if ($(this).scrollTop() > 350) {
//                $('#nav').slideDown(100);
//            } else {
//                $('#nav').slideUp(100);
//
//            }
//        });
//    });
//
//    $('#nav').removeClass('hidden');
//
//
//})(jQuery);
//
//
//$("#nav").click(function () {
//    $(".nav-links").toggleClass("show");
//    $("#nav").toggleClass("nav-expanded");
//});
//
//$(".body-padding").click(function () {
//    $(".nav-links").removeClass("show");
//    $("#nav").removeClass("nav-expanded");
//
//});
//
//$(".nav-links").click(function () {
//    $(this).toggleClass("show");
//});
//




(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 600) {
                $('.navlinkcontainer').fadeIn(1);
            } else {
                $('.navlinkcontainer').fadeOut(1);
            }
        });
    });
})(jQuery);



/* THIS IS THE SMOOTH SCROLLING EFFECT */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});