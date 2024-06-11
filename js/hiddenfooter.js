// hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarheight = $('footer').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // if they scrolled down and are past the navbar ass class .nav-uo
    // this makes it so you nexer see what is "behind" the navbar
    if (st > lastScrollTop && st > navbarheight) {
        // scroll down
        $('footer').removeClass('nav-down').addClass('nav-up');
    } else {
        // scroll up
        if (st + $(window).height() < $(document).height()) {
            $('footer').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}