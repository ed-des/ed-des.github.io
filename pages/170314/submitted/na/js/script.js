function dropMenu() {
    if (  $( '#my-dropdown' ).hasClass( 'show' ) ) {
        $( '#my-dropdown' ).removeClass( 'show' );
    } else {
        $( '#my-dropdown' ).addClass( 'show' );
    }
}

/* --- ON SCROLL JS --- */
// http://www.appelsiini.net/projects/viewport
window.onscroll = function (e) {  
    // pullquote - tweet up
    $('.dream-quote:in-viewport').find( ".dream-lucid" ).addClass('anim');
    $('.dream-quote:in-viewport').find( ".dream-material" ).addClass('anim');
}