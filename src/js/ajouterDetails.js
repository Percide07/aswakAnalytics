const anneeValue = document.getElementById("annee").value;
const chiffreValue = document.getElementById("CA").value;
const effictifValue = document.getElementById("effictif").value;
const surfaceValue = document.getElementById("surface").value;
const submitBtn = document.querySelector(".submit");
const details = document.getElementById("data");


const magasins = localStorage.getItem('localMagasins') ? JSON.parse(localStorage.getItem('localMagasins')) : [];
// Get the current URL
const urlParams = new URLSearchParams(window.location.search);

// Get individual parameter values
const magasinNom = urlParams.get('magasin');
const magasinLocation = urlParams.get('location');

const selectedMagasin = magasins.filter(magasin => magasin.nom == magasinNom && magasin.location == magasinLocation).map(magasin => magasin.donnees)[0]
const magasinId = magasins.filter(magasin => magasin.nom == magasinNom && magasin.location == magasinLocation)[0]

window.addEventListener("DOMContentLoaded",()=>{

  details.innerHTML = "";
  
  selectedMagasin.forEach((donnee, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${donnee.annee}</td>
      <td>${donnee.CA}</td>
          <td>${donnee.effectifs}</td>
          <td>${donnee.surface}</td>
          <td>
              <button style="background-color:#6818A5;color:white;" class="btn " data-bs-toggle="modal" data-bs-target="#modifierForm"> <i class="bi bi-pencil-square"></i></button>
              <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
              </td>
              `;
              details.appendChild(row);
            });

      const editBtn = Array.from(document.querySelectorAll(".bi.bi-pencil-square"))
      
      editBtn.forEach(btn => btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const data = Array.from(row.querySelectorAll("td"));
        const anneeValue = data[0].innerText;
        const chiffreValue = data[1].innerText;
        const effectifValue = data[2].innerText;
        const surfaceValue = data[3].innerText;
        let modifierMagasinIndex = selectedMagasin.findIndex(magasin => magasin.annee == anneeValue);
        if (modifierMagasinIndex !== -1) {
            selectedMagasin[modifierMagasinIndex] = {
                annee: anneeValue,
                CA: chiffreValue,
                effectifs: effectifValue,
                surface: surfaceValue
            };
    
            const modifierChiffre = document.querySelector("#modifierModal #showChiffre");
            modifierChiffre.value = chiffreValue;
            const modifierEffectif = document.querySelector("#modifierModal #showEffectif");
            modifierEffectif.value = effectifValue;
            const modifierSurface = document.querySelector("#modifierModal #showSurface");
            modifierSurface.value = surfaceValue;
            console.log("Modifier Chiffre:", modifierChiffre.value);
            console.log("Modifier Effectif:", modifierEffectif.value);
            console.log("Modifier Surface:", modifierSurface.value);
    
            document.getElementById("modifierModal").addEventListener("submit", (e) => {
                e.preventDefault();
                selectedMagasin[modifierMagasinIndex] = {
                  annee: parseInt(anneeValue),
                  CA: parseInt(modifierChiffre.value),
                  effectifs: parseInt(modifierEffectif.value),
                  surface: parseInt(modifierSurface.value)
                };
                localStorage.setItem("localMagasins",JSON.stringify(magasins))
                window.location.reload()

            });
        } else {
            console.log("Magasin not found for year:", anneeValue);
        }
    }));
    const deleteBtn = Array.from(document.querySelectorAll(".bi.bi-trash"));

    deleteBtn.forEach(btn => btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const data = Array.from(row.querySelectorAll("td"));
        const anneeValue = data[0].innerText;
        let deleteMagasinIndex = selectedMagasin.findIndex(magasin => magasin.annee == anneeValue);
        console.log(deleteMagasinIndex);
        if (deleteMagasinIndex !== -1) {
            selectedMagasin.splice(deleteMagasinIndex, 1);
            localStorage.setItem("localMagasins",JSON.stringify(magasins))
            window.location.reload()
        } else {
            console.log("Magasin not found for year:", anneeValue);
        }
    }));
    


            
})  

document.getElementById("ajouterModal").addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Retrieve input field values
  const anneeValue = parseInt(document.getElementById("annee").value);
    const chiffreValue = parseFloat(document.getElementById("CA").value);
    const effictifValue = parseInt(document.getElementById("effictif").value);
    const surfaceValue = parseFloat(document.getElementById("surface").value);

  // Log input field values
  console.log("Annee Value:", anneeValue);
  console.log("Chiffre_Affaire Value:", chiffreValue);
  console.log("Effictif Value:", effictifValue);
  console.log("Surface Value:", surfaceValue);

  // Push values into selectedMagasin array
  selectedMagasin.push({
      annee: anneeValue,
      CA: chiffreValue,
      effectifs: effictifValue,
      surface: surfaceValue
  });

  // Log selectedMagasin array after pushing
  console.log("selectedMagasin:", selectedMagasin);
  localStorage.setItem("localMagasins",JSON.stringify(magasins))
  window.location.reload()
});



