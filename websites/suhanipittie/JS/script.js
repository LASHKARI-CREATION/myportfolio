

let slideIndeximg = 0;
showSlidesimg();

function showSlidesimg() {
    let i;
    let slides = document.getElementsByClassName("mySlideshow");
    let dots = document.getElementsByClassName("slidedot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndeximg++;
    if (slideIndeximg > slides.length) { slideIndeximg = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeslide", "");
    }
    slides[slideIndeximg - 1].style.display = "block";
    dots[slideIndeximg - 1].className += " activeslide ";
    setTimeout(showSlidesimg, 2000); // Change image every 2 seconds
}



$(document).ready(function () {

    $(".mobmenu>svg").click(function () {
        $(".menulist").show();
    });

    $(".closebtn").click(function () {
        $(".menulist").hide();
    });

});