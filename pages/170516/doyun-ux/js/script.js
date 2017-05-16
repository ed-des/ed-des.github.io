function goRight() {
    if (  $( '#features' ).hasClass( 'step1' ) ) {
        $( '#features' ).removeClass( 'step1' );
        $( '#features' ).addClass( 'step2' );
    } else if (  $( '#features' ).hasClass( 'step2' ) ) {
        $( '#features' ).removeClass( 'step2' );
        $( '#features' ).addClass( 'step3' );
    } else {
        $( '#features' ).removeClass( 'step3' );
        $( '#features' ).addClass( 'step1' );
    }
}

function goLeft() {
    if (  $( '#features' ).hasClass( 'step1' ) ) {
        $( '#features' ).removeClass( 'step1' );
        $( '#features' ).addClass( 'step3' );
    } else if (  $( '#features' ).hasClass( 'step2' ) ) {
        $( '#features' ).removeClass( 'step2' );
        $( '#features' ).addClass( 'step1' );
    } else {
        $( '#features' ).removeClass( 'step3' );
        $( '#features' ).addClass( 'step2' );
    }
}