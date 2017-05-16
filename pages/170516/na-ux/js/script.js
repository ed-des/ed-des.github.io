// viewport js file from http://www.appelsiini.net/projects/viewport
window.onscroll = function (e) {  
  // in view
    $('#frames:in-viewport').find( "#frame-id" ).addClass('red');
    $('#frames:in-viewport').find( "#frame-id" ).removeClass('blue');
    // below fold 
    $('#frames:below-the-fold').find( "#frame-id" ).addClass('blue');
    $('#frames:below-the-fold').find( "#frame-id" ).removeClass('red');
    // above fold 
    $('#frames:above-the-top').find( "#frame-id" ).addClass('blue');
    $('#frames:above-the-top').find( "#frame-id" ).removeClass('red');
}