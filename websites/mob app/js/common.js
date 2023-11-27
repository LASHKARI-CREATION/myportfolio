

// side nav hide and show on click start

// navbar btn
$(".navsideimage").click(function () {
    $(".sidenavdiv").show();
    $(".clshomepage").hide();
    $(".bottomicondiv").hide();
});


//sidenave login div
$(".openaccpropage").click(function () {
    $(".accountmdiv").show();
    $(".clshomepage").hide();
});


// closebtn
$(".sidenavclsbtn").click(function () {
    $(".sidenavdiv").hide();
    $(".clshomepage").show();
    $(".bottomicondiv").show();
});





// side nav hide and show on click end










































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










