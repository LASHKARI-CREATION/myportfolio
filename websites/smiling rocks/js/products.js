import { data } from "./json.js";




const listloop = () => {
    let listing = document.getElementById("listitmdiv");

    let html = "";
    data.forEach((e, i) => {
        console.log(e);
        html += `
        <div class="listiimgdiv">
        <img src="./images/listing/l1.webp" loading="lazy" alt="">

        <h3>
            ${e["First Name"]}
            <br>
            ${e["Last Name"]}
        </h3>

        <p>
            <span>${e["Education"]}</span>
            <span>/</span>
            <span>${e["Age"]}</span>
        </p>

        <div class="dflxacenjcen colorselediv">
            <p class="white-gold"></p>
            <p class="rose-gold"></p>
            <p class="yellow-gold"></p>
        </div>
    </div>
        `;

    });
    listing.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", (event) => {
    listloop();
});
