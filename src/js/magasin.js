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
                        <p>${magasin.nom}</p>
                    </div>
                    <div class="cardpart1" id="marg1">
                        <i class="ri-map-pin-line mt-n3"></i>
                        <p>${magasin.location}</p>
                    </div>
                    <div class="cardpart2" id="marg1">
                        <p>${String(magasin.dateOuverture)}</p>
                    </div>
                </div>
            </div>
    `
)