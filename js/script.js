$(function () {
    $(".scroll-section").css({ "height": $(window).height() });
    $.scrollify({
        section: ".scroll-section"
    });


    $(".scroll").click(function (e) {
        e.preventDefault();
        $.scrollify("move", $(this).attr("href"));
    });
});