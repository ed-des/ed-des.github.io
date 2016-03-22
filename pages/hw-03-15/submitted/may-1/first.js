
$(".q").hover( hoverIn1, hoverOut1 );

  function hoverIn1() {

    $(".a p").css("color", "#AF1F70");
    $(".a p").css("transition", ".5s ease-in-out");
    $(".image img").css("opacity", "0.5");
    $(".image img").css("transition", ".5s ease-in-out");


    console.log("hoverIn1");
  }

  function hoverOut1() {

    $(".a p").css("color", "#DEDEDE");
    $(".image img").css("opacity", "1");

    console.log("hoverout1");

  }

// $(".image1").hover( hoverIn2, hoverOut2 );
//
//   function hoverIn2() {
//
//     $(".image img").css("border", "5px solid #EE3A43");
//
//     console.log("hoverIn2");
//   }
//
//   function hoverOut2() {
//     // show text2
//
//     $(".image img").css("border", "0px");
//     console.log("hoverout2");
//
//   }
