var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0 || st > lastScrollTop) {
        $(".dropdown-bar").addClass("hidden");
        $(".dropdown-btn").addClass("hidden");
        $("#dropdown-content").removeClass("active");
        $("#opacity").removeClass('opacity-on');
        $("nav.desktop").addClass("active");
    } else if (st < lastScrollTop) {
        $(".dropdown-bar").removeClass("hidden");
        $(".dropdown-btn").removeClass("hidden");
        $("#dropdown-content").removeClass("active");
        $("#opacity").removeClass('opacity-on');
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);


function dropIt() {
    document.getElementById('dropdown-content').classList.toggle('active');
    document.getElementById("opacity").classList.toggle('opacity-on');
}

function scrollToElement(elementtoscroll) {
    elementtoscroll.scrollIntoView();
    dropIt();
}
