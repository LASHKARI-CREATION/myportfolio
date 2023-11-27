$(document).ready(function () {
    $(".shophover").mouseenter(function () {
        $(".onhovrbgwhite").css("background-color", "var(--white-color)");
        $(".notificurrdiv").css({ "color": "var(--black-color)", "border-bottom": "1px solid var(--lightdark-border)" });
        $(".whtlogo").hide();
        $(".blcklogo").show();
        $(".menumdiv").css("color", "var(--black-color)");
        $(".svgwdth").css("fill", "var(--black-color)");
        $(".shopbrdr").css("border-bottom", "1px solid var(--black-color)");
        $(".navlisthover").slideDown(500);
    });


    $(".shophover").mouseleave(function () {
        $(".onhovrbgwhite").css("background-color", "transparent");
        $(".notificurrdiv").css({ "color": "var(--white-color)", "border-bottom": "1px solid var(--light-border)" });
        $(".whtlogo").show();
        $(".blcklogo").hide();
        $(".menumdiv").css("color", "var(--white-color)");
        $(".svgwdth").css("fill", "var(--white-color)");
        $(".shopbrdr").css("border-bottom", "0px");
        $(".navlisthover").hide();
    });


    $(".navlisthover").mouseenter(function () {
        $(".onhovrbgwhite").css("background-color", "var(--white-color)");
        $(".notificurrdiv").css({ "color": "var(--black-color)", "border-bottom": "1px solid var(--lightdark-border)" });
        $(".whtlogo").hide();
        $(".blcklogo").show();
        $(".menumdiv").css("color", "var(--black-color)");
        $(".svgwdth").css("fill", "var(--black-color)");
        $(".shopbrdr").css("border-bottom", "1px solid var(--black-color)");
        $(".navlisthover").show();
    });

    $(".navlisthover").mouseleave(function () {
        $(".onhovrbgwhite").css("background-color", "transparent");
        $(".notificurrdiv").css({ "color": "var(--white-color)", "border-bottom": "1px solid var(--light-border)" });
        $(".whtlogo").show();
        $(".blcklogo").hide();
        $(".menumdiv").css("color", "var(--white-color)");
        $(".svgwdth").css("fill", "var(--white-color)");
        $(".shopbrdr").css("border-bottom", "0px");
        $(".navlisthover").hide();
    });



    $(".btn1").click(function () {
        $(".btn1").css("background-color", "var(--background-lightcolor)");
        $(".btn2").css("background-color", "transparent");
        $(".btn3").css("background-color", "transparent");
        $(".btnfrstclick").show();
        $(".btnscndclick").hide();
        $(".btntrdclick").hide();
    });

    $(".btn2").click(function () {
        $(".btn2").css("background-color", "var(--background-lightcolor)");
        $(".btn1").css("background-color", "transparent");
        $(".btn3").css("background-color", "transparent");
        $(".btnfrstclick").hide();
        $(".btnscndclick").show();
        $(".btntrdclick").hide();
    });

    $(".btn3").click(function () {
        $(".btn3").css("background-color", "var(--background-lightcolor)");
        $(".btn2").css("background-color", "transparent");
        $(".btn1").css("background-color", "transparent");
        $(".btnfrstclick").hide();
        $(".btnscndclick").hide();
        $(".btntrdclick").show();
    });





    $(".lookslide").click(function () {
        $(".scndpop").toggle();
        $(".frstpop").toggle();
    });

    $(".topdot").click(function () {
        $(".scndpop").hide();
        $(".frstpop").show();
    });


    $(".pantdot").click(function () {
        $(".scndpop").show();
        $(".frstpop").hide();
    });





    $(".openprdct").click(function () {
        $(".prdcttypshow").slideToggle(500);
        $(".ftrsvg1").toggle();
        $(".ftrot1").toggle();

    });

    $(".opensizelst").click(function () {
        $(".ftrsvg2").toggle();
        $(".sizeshow").slideToggle(500);
        $(".ftrot2").toggle();

    });

    $(".openfablist").click(function () {
        $(".ftrsvg3").toggle();
        $(".showfablist").slideToggle(500);
        $(".ftrot3").toggle();

    });

    $(".openfitlst").click(function () {
        $(".ftrsvg4").toggle();
        $(".showfitlst").slideToggle(500);
        $(".ftrot4").toggle();

    });

    $(".openavaillst").click(function () {
        $(".ftrsvg5").toggle();
        $(".showavillst").slideToggle(500);
        $(".ftrot5").toggle();
    });



    $(".halfdiv").click(function () {
        $(".listingitems").css("width", "46%");
    });

    $(".onethirddiv").click(function () {
        $(".listingitems").css("width", "30%");
    });

    $(".fourdiv").click(function () {
        $(".listingitems").css("width", "22%");
    });


    $(".hidefilter").click(function () {
        $(".filterdivcls").hide();
        $(".prolistcls").css("width", "100%");
        $(".showfilter").show();
        $(".hidefilter").hide();
    });

    $(".showfilter").click(function () {
        $(".filterdivcls").show();
        $(".prolistcls").css("width", "calc(100% - 230px)");
        $(".showfilter").hide();
        $(".hidefilter").show();
    });


    $(".openfet").click(function () {
        $(".featlist").toggle();
    });




    $(".showdestxt").click(function () {
        $(".detrgt1").toggle();
        $(".detdwn1").toggle();
        $(".opendestxt").slideToggle(700);
    });

    $(".showcaretxt").click(function () {
        $(".detrgt2").toggle();
        $(".detdwn2").toggle();
        $(".opencaretxt").slideToggle(400);
    });

    $(".showshiptxt").click(function () {
        $(".detrgt3").toggle();
        $(".detdwn3").toggle();
        $(".openshiptxt").slideToggle(400);
    });






    $(".showcartpopup").click(function () {
        $(".addtcrtt").slideDown(400);
        setTimeout(() => {
            $(".addtcrtt").slideUp(400);
        }, 3000);
    });

    $(".closepopup").click(function () {
        $(".addtcrtt").slideUp(400);
    });






    $(".opentextar").click(function () {
        $(".textareacrt").slideToggle(400);
        $(".txtrgt").toggle();
        $(".txtdwn").toggle();
    });

    $(".opencount").click(function () {
        $(".countrydivcrt").slideToggle(400);
        $(".countrgt").toggle();
        $(".countdwn").toggle();
    });





    $(".opencart").click(function () {
        $(".cartfixdiv").show();
    });

    $(".closecrtpage").click(function () {
        $(".cartfixdiv").hide();
    });






    


    $(".openhelp").click(function () {
        $(".showhelp").slideToggle(400);
        $(".faqrgt1").toggle();
        $(".faqdwn1").toggle();
    });
    
    $(".opencont").click(function () {
        $(".showcont").slideToggle(400);
        $(".faqrgt2").toggle();
        $(".faqdwn2").toggle();
    });

    $(".openretpo").click(function () {
        $(".showretpo").slideToggle(400);
        $(".faqrgt3").toggle();
        $(".faqdwn3").toggle();
    });

});







// right click disabled js 

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});




// f12 , ctrl + u , ctrl + shift + i key disabled js 

document.onkeydown = function (e) {
    if (e.key === 'F12' || e.key === 'Control' || e.keyCode == 123) {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }

    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
};