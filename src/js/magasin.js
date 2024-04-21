const magasins = JSON.parse(localStorage.getItem("localMagasins"))
console.log(magasins[0])
magasins.map(magasin => 
    document.getElementById("magasin-list").innerHTML += `
             <div class="card1 col-xs-2 m-4 pb-5">
             <div class="sub1 overflow-hidden" >
             <img class="" src="${magasin.img}" alt="image" />
         </div>
         
                <div class="sub2">
                    <div>
                        <div class="subcard2">
                        <h3>${magasin.nom}<h3/>
                    </div>
                    <div class="cardpart1" id="marg1">
                        <i class="ri-map-pin-line mt-n3"></i>
                        <p>${magasin.location}</p>
                            <div>
                            <div class="cardpart2" id="marg1">
                                 <p>${magasin.dateOuverture}</p>
                            </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                        <button class="dashboard-btn d-flex flex-row btn btn-primary mr-3" data-magasin=${magasin.nom} data-location=${magasin.location} >Dashboard <i class="ri-arrow-right-line"></i></button>
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