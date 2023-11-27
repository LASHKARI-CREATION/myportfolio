
// bar chart 1

const ctx1 = document.getElementById('myChart');

new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Mon', ' ', 'Tue', ' ', 'Ted', ' ', 'Thu', ' ', 'Fri', ' ', 'Sat', ' ', 'Sun'],
        datasets: [{
            label: 'Accomodation',
            data: [150, 0, 80, 0, 20, 0, 90, 0, 150, 0, 95, 0, 140],
            backgroundColor: '#33BFBF',
            borderWidth: 1
        }, {
            label: 'Non-Accomodation',
            data: [100, 0, 110, 0, 70, 0, 120, 0, 40, 0, 75, 0, 110],
            backgroundColor: '#072448',
            borderWidth: 1
        }, {
            label: 'Monetary',
            data: [30, 0, 50, 0, 150, 0, 70, 0, 130, 0, 35, 0, 25],
            backgroundColor: '#FF6150',
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



// bar chart 2

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Mon', ' ', 'Tue', ' ', 'Ted', ' ', 'Thu', ' ', 'Fri', ' ', 'Sat', ' ', 'Sun'],
        datasets: [{
            label: 'Accomodation',
            data: [100, 0, 110, 0, 70, 0, 120, 0, 40, 0, 75, 0, 110],
            backgroundColor: '#33BFBF',
            borderWidth: 1
        }, {
            label: 'Non-Accomodation',
            data: [150, 0, 80, 0, 20, 0, 90, 0, 150, 0, 95, 0, 140],
            backgroundColor: '#072448',
            borderWidth: 1
        }, {
            label: 'Monetary',
            data: [30, 0, 50, 0, 150, 0, 70, 0, 130, 0, 35, 0, 25],
            backgroundColor: '#FF6150',
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// bar chart 3

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Mon', ' ', 'Tue', ' ', 'Ted', ' ', 'Thu', ' ', 'Fri', ' ', 'Sat', ' ', 'Sun'],
        datasets: [{
            label: 'Accomodation',
            data: [150, 0, 80, 0, 20, 0, 90, 0, 155, 0, 95, 0, 140],
            backgroundColor: '#33BFBF',
            borderWidth: 1
        }, {
            label: 'Non-Accomodation',
            data: [30, 0, 50, 0, 150, 0, 70, 0, 130, 0, 35, 0, 25],
            backgroundColor: '#072448',
            borderWidth: 1
        }, {
            label: 'Monetary',
            data: [100, 0, 110, 0, 70, 0, 120, 0, 40, 0, 75, 0, 110],
            backgroundColor: '#FF6150',
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// chart hide show

$(".sumbyweek").click(function () {
    $(".chart2").hide();
    $(".chart3").hide();
    $(".chart1").show();
    $(".sumbyweek").css({ "background": "#33BFBF", "color": "#FFFFFF" });
    $(".sumbyyear").css({ "background": "none", "color": "#000000" });
    $(".sumbymnth").css({ "background": "none", "color": "#000000" });
});

$(".sumbyyear").click(function () {
    $(".chart2").hide();
    $(".chart3").show();
    $(".chart1").hide();
    $(".sumbyyear").css({ "background": "#33BFBF", "color": "#FFFFFF" });
    $(".sumbyweek").css({ "background": "none", "color": "#000000" });
    $(".sumbymnth").css({ "background": "none", "color": "#000000" });
});

$(".sumbymnth").click(function () {
    $(".chart2").show();
    $(".chart3").hide();
    $(".chart1").hide();
    $(".sumbymnth").css({ "background": "#33BFBF", "color": "#FFFFFF" });
    $(".sumbyweek").css({ "background": "none", "color": "#000000" });
    $(".sumbyyear").css({ "background": "none", "color": "#000000" });
});



// doughnut chart 1

const ctx4 = document.getElementById('myChart4');

new Chart(ctx4, {
    type: 'doughnut',
    data: {
        // labels: ['Paid', 'Foc',],
        datasets: [{
            label: 'Revenue',
            data: [50, 50],
            backgroundColor: ['#33BFBF', '#E4E4E5'],
            // borderWidth: 5,
        }
        ]
    },
    options: {
        cutout: 82,
        rotation: 240,
    }
});



// doughnut chart 2

const ctx5 = document.getElementById('myChart5');

new Chart(ctx5, {
    type: 'doughnut',
    data: {
        // labels: ['Acc', 'Non Acc', 'Monetary'],
        datasets: [{
            label: 'Vouchers',
            data: [50, 25, 25],
            backgroundColor: ['#FFA941', '#54BA4A', '#FF6150'],
            // borderWidth: 10,
        }
        ]
    },
    options: {
        cutout: 84,
        rotation: 90,
    }
});












 
let state = null;
let options = { year: 'numeric', month: 'long' } 
let calendar_date = document.querySelector("#calendar_date");
let calendar_month = document.querySelector("#calendar_month");
let calendar_year = document.querySelector("#calendar_year");
let datepickerInput = document.querySelector("#datepickerInput");


function init() {
    state = {
        current: new Date()
    };
    render();
}
function preMonth() {
    state.current.setMonth(state.current.getMonth() - 1);
    render();
}
function nextMonth() {
    state.current.setMonth(state.current.getMonth() + 1);
    render();
}
function preYear() {
    state.current.setYear(state.current.getFullYear() - 1);
    render();
}
function nextYear() {
    state.current.setYear(state.current.getFullYear() + 1);
    render();
}
function preYears() {
    state.current.setYear(state.current.getFullYear() - 10);
    render();
}
function nextYears() {
    state.current.setYear(state.current.getFullYear() + 10);
    render();
}
function showMonth() {
    calendar_month.className = 'calendar';
    calendar_date.className = 'd-none'
}
function showYear() {
    calendar_year.className = 'calendar';
    calendar_month.className = 'd-none'
}
function renderWeek() {
    let week = document.querySelector("#week");

    cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (var i = 0; i <= 6; i++) {
        week.innerHTML += '<div class="day">' + cal_days_labels[i] + '</div>';
    }
}
renderWeek();

function render() {
    let head = document.querySelector("#year-month");
    head.textContent = new Intl.DateTimeFormat('en-US', options).format(state.current);
    // head.textContent = state.current.getFullYear() + " / " + (state.current.getMonth()+1);
    let list = document.querySelector("#list");
    list.innerHTML = ""; 

    
    let firstDate = new Date(state.current.getFullYear(), state.current.getMonth(), 1);
    
    let date = new Date(firstDate.getFullYear(), firstDate.getMonth(), 1);
    date.setDate(date.getDate() - date.getDay());
    while (date < firstDate) {
        renderDate(date, list);
        date.setDate(date.getDate() + 1);
    }
    while (date.getMonth() === state.current.getMonth()) {
        renderDate(date, list);
        date.setDate(date.getDate() + 1);
    }
    
    while (date.getDay() > 0) {
        renderDate(date, list);
        date.setDate(date.getDate() + 1);
    }

    let year = document.querySelector("#year");
    year.textContent = state.current.getFullYear();
    let monlist = document.querySelector("#monlist");
    monlist.innerHTML = "";
    let mon = (state.current.getMonth() + 1);
    renderMonth(mon, monlist);

    let years = document.querySelector("#years");
    let currentYear = state.current.getFullYear();
    let order = currentYear % 10;
    let recentYear = currentYear - (order + 1);
    years.textContent = (recentYear + " - " + (recentYear + 11));
    let yearlist = document.querySelector("#yearlist");
    yearlist.innerHTML = "";
    renderYears(years, yearlist);
}
function renderDate(date, list) {
    let cell = document.createElement("button");
    cell.className = "date" + (date.getMonth() === state.current.getMonth() ? "" : " fadeout");
    cell.setAttribute("onmousedown", "selectDate(this)");
    let month = (date.getMonth() + 1);
    let day = date.getDate();
    if (month < 10 && day < 10) {
        month = '0' + month;
        day = '0' + day;
    } else if (month < 10) {
        month = '0' + month;
    } else if (day < 10) {
        day = '0' + day;
    }
    cell.setAttribute("value", (date.getFullYear() + '-' + month + '-' + day));
    cell.textContent = date.getDate();
    list.appendChild(cell);
}
function renderMonth(mon, monlist) {
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (var i = 0; i <= 11; i++) {
        monlist.innerHTML += '<button class="mon" onclick="selectMonth(this);" value="' + [i] + '">' + months[i] + '</button>';
    }
}
function renderYears(years, yearlist) {
    let currentYear = state.current.getFullYear();
    let order = currentYear % 10;
    let recentYear = currentYear - (order + 1);

    for (var i = 0; i < 12; i++) {
        yearlist.innerHTML += '<button class="mon" onclick="selectYear(this);" value="' + (recentYear + i) + '">' + (recentYear + i) + '</button>';
    }
}

// show Calendar
// datepickerInput.addEventListener('focus', (event) => {
//     showCalendar();
// });

function showCalendar() {
    let today = new Date();
    let todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    calendar_date.className = 'calendar';

    let els = document.getElementsByClassName("date");
    for (let i = 0; i < els.length; i++) {
        if (datepickerInput.value == els[i].value) {
            els[i].classList.add("active");
        } else {
            els[i].classList.remove("active");
        }
        if (todayDate == els[i].value) {
            els[i].classList.add("today");
        }
    }
}
function hideCalendar() {
    calendar_date.className = 'd-none';
}

function toggleCalendar() {
    if (calendar_date.className === "d-none") {
        showCalendar();
    } else {
        hideCalendar();
    }
}

function selectDate(o) {
    datepickerInput.value = o.value;
    calendar_date.className = 'd-none';
}
function selectMonth(o) {
    state.current.setMonth(o.value);
    render();
    calendar_month.className = 'd-none';
    calendar_date.className = 'calendar';
}

function selectYear(o) {
    state.current.setYear(o.value);
    render();
    calendar_year.className = 'd-none';
    calendar_month.className = 'calendar';
}

function checkDate(o) {
    let dateVal = o.value;
    let dateYear = dateVal.substr(0, 4);

    if (dateVal.length == 8) {
        let dateMonth = dateVal.substr(4, 2);
        let dateDay = dateVal.substr(6, 2);
        if (dateDay > 31) {
            clearInput();
        } else {
            dateVal = dateYear + "-" + dateMonth + "-" + dateDay;
            o.value = dateVal;
            renderCalendar();
        }

    } else if (dateVal.length == 7) {
        let dateMonth = dateVal.substr(4, 1);
        let dateDay = dateVal.substr(5, 2);
        if (dateDay > 31) {
            clearInput();
        } else {
            dateVal = dateYear + "-0" + dateMonth + "-" + dateDay;
            o.value = dateVal;
            renderCalendar();
        }
    }
    function clearInput() {
        o.focus();
        o.value = '';
    }
    function renderCalendar() {
        let innerText = new Date(datepickerInput.value);
        state.current = innerText;
        hideCalendar();
        render();
    }

}

init();




document.getElementById("pdfFile").addEventListener("change", function () {
    var fileName = this.value;
    var fileType = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();

    if (fileType !== "pdf") {
        alert("Please choose a PDF file.");
        this.value = "";
    } else {
        // Handle the uploaded PDF file here
        console.log("PDF file uploaded");
    }
});








$(".clsnavsvgmob").click(function () {
    $(".clsnavbar").show();
});

$(".clsclosnav").click(function () {
    $(".clsnavbar").hide();
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