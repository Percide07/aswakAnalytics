const magasins = JSON.parse(localStorage.getItem("localMagasins"))
console.log(magasins[0])
console.log(document.querySelector(".container"))
magasins.map(magasin => 
    document.getElementById("magasin-list").innerHTML += `
             <div class="card1 col-xs-2 m-4">
             <div class="sub1 overflow-hidden" >
             <img class="" src="${magasin.img}" alt="image" />
         </div>
         
                <div class="sub2">
                    <div class="subcard2">
                        <h4>${magasin.nom}</h4>
                    </div>
                    <div class="cardpart1" id="marg1">
                        <i class="ri-map-pin-line mt-n3"></i>
                        <p>${magasin.location}</p>
                    </div>
                    <div>
                    <button data-magasin=${magasin.nom} data-location=${magasin.location} class="dashboard-btn btn btn-primary">Dashboard <i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
    `
)

const dashboardBtn = Array.from(document.querySelectorAll(".dashboard-btn"))
dashboardBtn.map(btn=>btn.addEventListener("click",()=>{
    window.location.href=`./ajouterDetails.html?magasin=${btn.dataset.magasin}&location=${btn.dataset.location}`
}))