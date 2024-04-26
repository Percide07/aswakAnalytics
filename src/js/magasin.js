import { filterByLocation } from "../libs/filter.js";

const magasins = JSON.parse(localStorage.getItem("localMagasins"))
// Get the URLSearchParams object from the current URL
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'location' parameter
const locationParam = urlParams.get('location');
let filteredMagasins;
filteredMagasins = locationParam && filterByLocation(magasins,locationParam)
console.log(filteredMagasins)

filteredMagasins ? filteredMagasins.map(magasin => 
    document.getElementById("magasin-list").innerHTML += `
    <div class="card1 col-xs-2 m-4 pb-5 col-lg-3 col-md-5">
    <div class="sub1 overflow-hidden">
        <img class="" src="${magasin.img}" alt="image" />
    </div>

    <div class="sub2">
        <div>
            <div class="">
                <h3>${magasin.nom}</h3>
            </div>
        </div>
        <div class="cardpart1">
            <i class="ri-map-pin-line mt-n3"></i>
            <p>${magasin.location}</p>
            <div class="cardpart2">
                <p>${magasin.dateOuverture}</p>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button class="dashboard-btn d-flex flex-row btn btn-primary mr-3" data-magasin="${magasin.nom}" data-location="${magasin.location}">Dashboard <i class="ri-arrow-right-line"></i></button>
        </div>
    </div>
</div>

    `
) : magasins.map(magasin => 
    document.getElementById("magasin-list").innerHTML += `
    <div class="card1 col-xs-2 m-4 pb-5 col-lg-3 col-md-5">
    <div class="sub1 overflow-hidden">
        <img class="" src="${magasin.img}" alt="image" />
    </div>

    <div class="sub2">
        <div>
            <div class="">
                <h3>${magasin.nom}</h3>
            </div>
        </div>
        <div class="cardpart1">
            <i class="ri-map-pin-line mt-n3"></i>
            <p>${magasin.location}</p>
            <div class="cardpart2">
                <p>${magasin.dateOuverture}</p>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button class="dashboard-btn d-flex flex-row btn btn-primary mr-3" data-magasin="${magasin.nom}" data-location="${magasin.location}">Dashboard <i class="ri-arrow-right-line"></i></button>
        </div>
    </div>
</div>

    `
)

const dashboardBtn = Array.from(document.querySelectorAll(".dashboard-btn"))
dashboardBtn.map(btn=>btn.addEventListener("click",()=>{
    console.log(btn.dataset.magasin,btn.dataset.location)
    window.location.href=`./ajouterDetails.html?magasin=${btn.dataset.magasin}&location=${btn.dataset.location}`
}))

const switchBtn = document.getElementById("switch");

let isAlternate = false;

switchBtn.addEventListener("click", () => {
    if (isAlternate) {
        switchBtn.innerHTML = `
            <img src="../asset/logo/list2.png" alt="" class="list">
            <img src="../asset/logo/list.png" alt="" class="list">
        `;
        const cards = document.querySelectorAll(".card1");
        cards.forEach(card => {
            card.classList.add("col-xs-52");
            card.classList.add("col-md-5");
            card.classList.add("col-lg-3");
        });
    } else {
        switchBtn.innerHTML = `
            <img src="../asset/logo/list.png" alt="" class="list">
            <img src="../asset/logo/list2.png" alt="" class="list">
        `;
        const cards = document.querySelectorAll(".card1");
        cards.forEach(card => {
            card.classList.remove("col-xs-52");
            card.classList.remove("col-md-5");
            card.classList.remove("col-lg-3");
        });
    }


    isAlternate = !isAlternate; // Toggle the state
    console.log(cards);
});

