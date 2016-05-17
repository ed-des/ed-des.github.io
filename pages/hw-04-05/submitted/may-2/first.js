$(".a").hover( hoverIn1, hoverOut1 );

  function hoverIn1() {

    $(".a p").css("color", "#AF1F70");
    $(".a p").css("transition", ".5s ease-in-out");
    $(".image img").css("opacity", "0.2");
    $(".image img").css("transition", ".5s ease-in-out");



    console.log("hoverIn1");
  }

  function hoverOut1() {

    $(".a p").css("color", "#DEDEDE");
    $(".image img").css("opacity", "1");

    console.log("hoverout1");

  }
