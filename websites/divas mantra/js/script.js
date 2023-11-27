$(document).ready(function () {


    $(".sortlistopen").click(function () {
        $(".sortdiv").toggle();
    });

    $(".closesortcss").click(function () {
        $(".sortdiv").hide();
    });


    $(".filterlistopen").click(function () {
        $(".filterblock").show();
    });

    $(".filterclosebtn").click(function () {
        $(".filterblock").hide();
    });

    $(".wishclose").click(function () {
        $(".wishlistshow").hide();
    });

    $(".openwishlist").click(function () {
        $(".wishlistshow").show();
    });

    $(".opencartlist").click(function () {
        $(".cartshow").show();
    });

    $(".cartclose").click(function () {
        $(".cartshow").hide();
    });

    $(".actcreat").click(function () {
        $(".openlogin").hide();
        $(".openregister").show();
    });

    $(".forgetpass").click(function () {
        $(".openlogin").hide();
        $(".openforgetpass").show();
    });

    $(".bcktlogin").click(function () {
        $(".openlogin").show();
        $(".openforgetpass").hide();
    });

    $(".navigationsvg").click(function () {
        $(".openmoblist").show();
    });

    $(".closemobcls").click(function () {
        $(".openmoblist").hide();
    });





    $(".lbllistdiv").click(function () {
        $(".lsitshowdiv").slideToggle(500);
        $(".fltrplsvg").toggle();
        $(".fltrminusvg").toggle();
    });

    $(".showdestxt").click(function () {
        $(".openshipdiv").hide();
        $(".opendestxt").show();
        $(".showdestxt").addClass("detdesactive");
        $(".showshiptxt").removeClass("detdesactive");
    });

    $(".showshiptxt").click(function () {
        $(".openshipdiv").show();
        $(".opendestxt").hide();
        $(".showdestxt").removeClass("detdesactive");
        $(".showshiptxt").addClass("detdesactive");
    });

});


// header news slide start

let slideNewsTxt = 0;
hedtxtshowSlides();

function hedtxtshowSlides() {
    let i;
    let slides = document.getElementsByClassName("headnewstxtslide");
    let dots = document.getElementsByClassName("hednewsliddot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideNewsTxt++;
    if (slideNewsTxt > slides.length) { slideNewsTxt = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" hednesactiveslide", "");
    }
    slides[slideNewsTxt - 1].style.display = "block";
    dots[slideNewsTxt - 1].className += " hednesactiveslide ";
    setTimeout(hedtxtshowSlides, 4000); // Change image every 2 seconds
}

// header news slide end





// on scroll show header

window.addEventListener('scroll', function (e) {
    // console.log(window.scrollY);
    // console.log("scrolling..");
    if (window.scrollY > 140) {
        document.getElementsByClassName("scrollshowdiv")[0].style.display = "block";
    } else {
        document.getElementsByClassName("scrollshowdiv")[0].style.display = "none";
    }
});

// on scroll show header










// banner slide start

let bannerslideIndeximg = 0;
bannerslide();

function bannerslide() {
    let i;
    let slides = document.getElementsByClassName("bannerslidecls");
    let dots = document.getElementsByClassName("bannersliddot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    bannerslideIndeximg++;
    if (bannerslideIndeximg > slides.length) { bannerslideIndeximg = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" banneractiveslide", "");
    }
    slides[bannerslideIndeximg - 1].style.display = "block";
    dots[bannerslideIndeximg - 1].className += " banneractiveslide ";
    setTimeout(bannerslide, 5000); // Change image every 2 seconds
}

// banner slide end 




// home product details slider start

let producthomeslide = 1;
showSlidesprodcut(producthomeslide);

function plusSlidesprdt(n) {
    showSlidesprodcut(producthomeslide += n);
}

function currentSlideprdt(n) {
    showSlidesprodcut(producthomeslide = n);
}

function showSlidesprodcut(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesproductcls");
    let dots = document.getElementsByClassName("clsmovingprdtdot");
    if (n > slides.length) { producthomeslide = 1 }
    if (n < 1) { producthomeslide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" clsactiveprdtdot", "");
    }
    slides[producthomeslide - 1].style.display = "block";
    dots[producthomeslide - 1].className += " clsactiveprdtdot";
}

// home product details slider end









// home product details second slider start

let producthomescndslide = 1;
showSlidesscndprodcut(producthomescndslide);

function plusscndSlidesprdt(n) {
    showSlidesscndprodcut(producthomescndslide += n);
}

function currentscndSlideprdt(n) {
    showSlidesscndprodcut(producthomescndslide = n);
}

function showSlidesscndprodcut(n) {
    let i;
    let slides = document.getElementsByClassName("myscndSlidesproductcls");
    let dots = document.getElementsByClassName("clsmovingscndprdtdot");
    if (n > slides.length) { producthomescndslide = 1 }
    if (n < 1) { producthomescndslide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" clsactivescndprdtdot", "");
    }
    slides[producthomescndslide - 1].style.display = "block";
    dots[producthomescndslide - 1].className += " clsactivescndprdtdot";
}

// home product details second slider end




function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}



function incrtValue() {
    var value = parseInt(document.getElementById('numbercrt').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numbercrt').value = value;
}

function dcartValue() {
    var value = parseInt(document.getElementById('numbercrt').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numbercrt').value = value;
}