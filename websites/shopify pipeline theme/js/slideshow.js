let slideIndexprimg = 1;
showSlidesprimg(slideIndexprimg);

function plusSlides(n) {
    showSlidesprimg(slideIndexprimg += n);
}

function currentSlide(n) {
    showSlidesprimg(slideIndexprimg = n);
}

function showSlidesprimg(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidescls");
    let dots = document.getElementsByClassName("clsmovingdot");
    if (n > slides.length) { slideIndexprimg = 1 }
    if (n < 1) { slideIndexprimg = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" clsactivedot", "");
    }
    slides[slideIndexprimg - 1].style.display = "block";
    dots[slideIndexprimg - 1].className += " clsactivedot";
}