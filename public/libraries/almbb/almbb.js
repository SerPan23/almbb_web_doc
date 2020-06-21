$(document).ready(function () {
    //animated-bootstrap-hamburger
    $('.navbar-collapse').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggler').removeClass("active");
    });

    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });
    //---------------------

    //sidenav
    $('.nav-link-collapse').on('click', function () {
        $('.nav-link-collapse').not(this).removeClass('nav-link-show');
        $(this).toggleClass('nav-link-show');
    });
    //---------------------
});