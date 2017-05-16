// viewport js file from http://www.appelsiini.net/projects/viewport
window.onscroll = function (e) {  
    // NOTE – this is the logic:
    // 1/ when scrolling, if parent X is in view, add class to child Y.
    // 2/ when scrolling, if parent X is below the view, remove class from child Y.
    // 3/ when scrolling, if parent X is above the view, remove class from child Y.
    // for #box1
    $('#messagebg:in-viewport').find( "#drawline" ).addClass('pathgo');
    $('#messagebg:below-the-fold').find( "#drawline" ).removeClass('pathgo');
    $('#messagebg:above-the-top').find( "#drawline" ).removeClass('pathgo');
}