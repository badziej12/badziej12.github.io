window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var scrollPos = $(window).scrollTop();
    if (scrollPos == 0 || st > lastScrollTop) {
        $("nav.desktop").removeClass("active");
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);