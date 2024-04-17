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
                        <p>Sidi Maarouf</p>
                    </div>
                    <div class="cardpart1" id="marg1">
                        <img src="../asset/logo/location.png" alt="" class="subicon">
                        <p>Casablanca, Sidi Maarouf</p>
                    </div>
                </div>
            </div>
    `
)