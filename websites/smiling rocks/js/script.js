$(document).ready(function () {

    $(".shopmenulist").mouseenter(function () {
        $(".shopmenu").show();
    });

    $(".shopmenu").mouseleave(function () {
        $(".shopmenu").hide();
    });

    $(".opencarat").click(function () {
        $(".showcarat").slideToggle(500);
        $(".crtpls").toggle();
        $(".crtmns").toggle();
    });

    $(".openprice").click(function () {
        $(".showprice").slideToggle(500);
        $(".prcpls").toggle();
        $(".prcmns").toggle();
    });

    $(".opensize").click(function () {
        $(".showsize").slideToggle(500);
        $(".sizpls").toggle();
        $(".sizmns").toggle();
    });

    $(".openstyle").click(function () {
        $(".showstyle").slideToggle(500);
        $(".stlpls").toggle();
        $(".stlmns").toggle();
    });

    $(".opencart").click(function () {
        $(".cartblock").show();
    });

    $(".crtclosebtn").click(function () {
        $(".cartblock").hide();
    });




    $(".openmobmenu").click(function () {
        $(".showmobmenu").show();
        $(".openmobmenu").hide();
        $(".closemobmenu").show();
    });

    $(".closemobmenu").click(function () {
        $(".showmobmenu").hide();
        $(".closemobmenu").hide();
        $(".openmobmenu").show();
    });

    $(".opensubmenu").click(function () {
        $(".submobmenu").slideToggle(500);
    });

    $(".mobcatlst").click(function () {
        $(".catup").toggle();
        $(".catdown").toggle();
        $(".collectionfilter").slideToggle(500);
    });




    $(".mobfilname").click(function () {
        $(".hidemobfil").show();
    });

    $(".mobfilterclosdiv").click(function () {
        $(".hidemobfil").hide();
    });


});





// <!-- 1st range start -->

var filrangeOne = document.querySelector('input[name="filrangeOne"]'),
    filrangeTwo = document.querySelector('input[name="filrangeTwo"]'),
    outputrngOne = document.querySelector('.outputrngOne'),
    outputrngTwo = document.querySelector('.outputrngTwo'),
    inclRange = document.querySelector('.clsinclrange'),
    updateView = function () {
        if (this.getAttribute('name') === 'filrangeOne') {
            outputrngOne.innerHTML = this.value;
        } else {
            outputrngTwo.innerHTML = this.value
        }
        if (parseInt(filrangeOne.value) > parseInt(filrangeTwo.value)) {
            inclRange.style.width = (filrangeOne.value - filrangeTwo.value) / this.getAttribute('max') * 100 + '%';
            inclRange.style.left = filrangeTwo.value / this.getAttribute('max') * 100 + '%';
        } else {
            inclRange.style.width = (filrangeTwo.value - filrangeOne.value) / this.getAttribute('max') * 100 + '%';
            inclRange.style.left = filrangeOne.value / this.getAttribute('max') * 100 + '%';
        }
    };

document.addEventListener('DOMContentLoaded', function () {
    updateView.call(filrangeOne);
    updateView.call(filrangeTwo);
    $('.filrng').on('mouseup', function () {
        this.blur();
    }).on('mousedown input', function () {
        updateView.call(this);
    });
});

// <!-- 1st range end -->





// <!-- 2ND range start -->

var filthreerangeOne = document.querySelector('input[name="filthreerangeOne"]'),
    filthreerangeTwo = document.querySelector('input[name="filthreerangeTwo"]'),
    outputthreerngOne = document.querySelector('.outputthreerngOne'),
    outputthreerngTwo = document.querySelector('.outputthreerngTwo'),
    inclRangethree = document.querySelector('.clsinclrangethree'),
    updateViewthree = function () {
        if (this.getAttribute('name') === 'filthreerangeOne') {
            outputthreerngOne.innerHTML = this.value;
        } else {
            outputthreerngTwo.innerHTML = this.value
        }
        if (parseInt(filthreerangeOne.value) > parseInt(filthreerangeTwo.value)) {
            inclRangethree.style.width = (filthreerangeOne.value - filthreerangeTwo.value) / this.getAttribute('max') * 100 + '%';
            inclRangethree.style.left = filthreerangeTwo.value / this.getAttribute('max') * 100 + '%';
        } else {
            inclRangethree.style.width = (filthreerangeTwo.value - filthreerangeOne.value) / this.getAttribute('max') * 100 + '%';
            inclRangethree.style.left = filthreerangeOne.value / this.getAttribute('max') * 100 + '%';
        }
    };

document.addEventListener('DOMContentLoaded', function () {
    updateViewthree.call(filthreerangeOne);
    updateViewthree.call(filthreerangeTwo);
    $('.filthreerng').on('mouseup', function () {
        this.blur();
    }).on('mousedown input', function () {
        updateViewthree.call(this);
    });
});

// <!-- 2ND range end -->



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

