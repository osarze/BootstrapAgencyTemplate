import '../css/style.scss';
require('bootstrap');
let Isotope = require('isotope-layout');
// import 'isotope-layout/dist/isotope.pkgd';
require('jquery.easing');


$(function() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    let navbarCollapse = function() {
        if ($("#navbar").offset().top > 100) {
            // alert("enklkjfhnecfn");
            $("#navbar").addClass("top-nav-collapse");
        } else {
            $("#navbar").removeClass("top-nav-collapse");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    $(window).scroll(navbarCollapse);

    //Jquery Isotope
    let container = document.querySelector('.portfolioContainer');
    let iso = new Isotope( container, {
        filter: '*',
        itemSelector: '.col-md-6',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function (e) {
            e.preventDefault();
        let filterValue = $(this).attr('data-filter');
        iso.arrange({
            filter: filterValue
        });
        return false;
    });
});