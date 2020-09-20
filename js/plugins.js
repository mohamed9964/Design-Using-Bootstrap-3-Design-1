/* global $, jquery, alert */

$(document).ready(function() {

    "use strict";

    // Nice Scroll

    $("body").niceScroll({
        cursorcolor: "#E41B17", // change cursor color in hex
        cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #fff", // css definition for cursor border
        cursorborderradius: "5px"
    });

    $('.carousel').carousel({

        interval: 6000

    });

    // Show Color Option Div When Click On The Gear

    $(".gear-check").click(function() {

        $(".color-option").fadeToggle();

    });

    // Change  Theme Color On Click

    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#FFD500");

    colorLi.click(function() {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });

    // Caching The Scroll Top Element

    var scrollButton = $("#scroll-top");


    $(window).scroll(function() {

        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

    });

    // Click On Button To Scroll Top

    scrollButton.click(function() {

        $("html,body").animate({ scrollTop: 0 }, 600);

    });

});

//Loading Screen

$(window).on("load", function() {

    "use strict";

    $(".loading-overlay .spinner").fadeOut(2000,

        function() {

            $("body").css("overflow", "noscroll");

            $(this).parent().fadeOut(2000,

                function() {

                    $(this).remove();
                });
        });
});