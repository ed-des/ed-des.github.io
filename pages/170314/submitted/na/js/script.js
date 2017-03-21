function dropMenu() {
    if (  $( '#my-dropdown' ).hasClass( 'show' ) ) {
        $( '#my-dropdown' ).removeClass( 'show' );
    } else {
        $( '#my-dropdown' ).addClass( 'show' );
    }
}