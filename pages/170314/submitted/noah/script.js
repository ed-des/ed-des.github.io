function nameOfFunction() {
    if (  $( '#id-name' ).hasClass( 'class-name' ) ) {
        $( '#id-name' ).removeClass( 'class-name' );
    } else {
        $( '#id-name' ).addClass( 'class-name' );
    }
}