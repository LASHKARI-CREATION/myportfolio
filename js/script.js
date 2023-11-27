const textContainer = document.getElementById("text-container");
const texts = ["Web Designer.", "HTML Devloper.", "Photographer.", "Sketch Artist.", "Cricketer."];
let currentIndex = 0;
const delay = 100; // Delay in milliseconds between each text

// Function to display and erase texts in an infinite loop
function displayAndEraseTexts() {
    const text = texts[currentIndex];
    let index = 0;
    const interval = setInterval(() => {
        textContainer.textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
            setTimeout(eraseText, 1500); // Wait for 1 second before erasing
        }
    }, delay);
}

// Function to erase text characters one by one
function eraseText() {
    const currentText = textContainer.textContent;
    if (currentText.length === 0) {
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(displayAndEraseTexts, 1000); // Wait for 1 second before displaying the next text
    } else {
        textContainer.textContent = currentText.slice(0, -1);
        setTimeout(eraseText, delay);
    }
}

// Start the loop by calling displayAndEraseTexts
displayAndEraseTexts();








$(document).ready(function () {

    $("#frstprj").mouseenter(function () {
        $("#frstdet").show(300);
    });

    $("#frstprj").mouseleave(function () {
        $("#frstdet").hide(300);
    });



    $("#scndprj").mouseenter(function () {
        $("#scnddet").show(300);
    });

    $("#scndprj").mouseleave(function () {
        $("#scnddet").hide(300);
    });



    $("#thrdprj").mouseenter(function () {
        $("#thrddet").show(300);
    });

    $("#thrdprj").mouseleave(function () {
        $("#thrddet").hide(300);
    });



    $("#frthprj").mouseenter(function () {
        $("#frthdet").show(300);
    });

    $("#frthprj").mouseleave(function () {
        $("#frthdet").hide(300);
    });



    $("#fiftprj").mouseenter(function () {
        $("#fiftdet").show(300);
    });

    $("#fiftprj").mouseleave(function () {
        $("#fiftdet").hide(300);
    });



    $("#sixprj").mouseenter(function () {
        $("#sixdet").show(300);
    });

    $("#sixprj").mouseleave(function () {
        $("#sixdet").hide(300);
    });



    $("#sevnprj").mouseenter(function () {
        $("#sevndet").show(300);
    });

    $("#sevnprj").mouseleave(function () {
        $("#sevndet").hide(300);
    });



    $("#eigtprj").mouseenter(function () {
        $("#eigtdet").show(300);
    });

    $("#eigtdet").mouseleave(function () {
        $("#eigtdet").hide(300);
    });

});





// Scrollspy with js

// window.addEventListener('scroll', function () {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('nav a');

//     sections.forEach((section, index) => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 50 && rect.bottom >= 50) {
//             navLinks[index].classList.add('active');
//         } else {
//             navLinks[index].classList.remove('active');
//         }
//     });
// });




// right click disabled js 

// window.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });




// f12 , ctrl + u , ctrl + shift + i key disabled js 

// document.onkeydown = function (e) {
//     if (e.key === 'F12' || e.key === 'Control' || e.keyCode == 123) {
//         e.preventDefault();
//         return false;
//     }

//     if (e.ctrlKey && e.key === 'u') {
//         e.preventDefault();
//         return false;
//     }

//     if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
//         e.preventDefault();
//     }
// };

