// $(document).addEventListener('touchmove', function() {}, { passive: false })
// $(window).addEventListener(
//     'touchmove', function(){ $(passive).false }
//     )
// var s = skrollr.init(); //初始化


$(document).ready(function() {
    if ($(window).width() < 769) {
        $("#section_me .container .col-sm-8").css("margin-left", "0px");
        $("#section_me .container .col-sm-8 .title").css("margin-top", "50px");
        $("#section_me .container .col-sm-4.img").css("height", "400px");

        $("#section_skill .container .col-sm-6.img").removeClass("img");
        $("#section_skill .container .col-sm-6.txt .title").css("margin-top", "0px");

        $("#section_works .container .col-sm-4.img").removeClass("img");
        $("#section_works .container .content").css("text-align", "right");

    }
});

// $(function() {
//     $(window).scroll(function() {
//         var scrollVal = $(this).scrollTop();
//         $(".window").text(scrollVal);
//     });
// });


// var scrollVal = $(window).scrollTop();
// if (scrollVal = 400) {
//     $(".window").css("color", "white");
// }