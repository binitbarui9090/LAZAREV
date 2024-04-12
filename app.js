// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

var elem = document.querySelectorAll(".right-elem");
var elemImg = document.querySelector(".right-elem img");


elem.forEach(function(elem){
    elem.addEventListener("mouseenter",function () {
        elem.childNodes[3].style.opacity = 1;
    })
    elem.addEventListener("mouseleave",function () {
        elem.childNodes[3].style.opacity = 0;
    })
    elem.addEventListener("mousemove",function (dets) {
        gsap.to(elem.childNodes[3]),{
            x:dets.x,
            x:dets.y
        }
    })
})