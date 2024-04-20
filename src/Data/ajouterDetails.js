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
console.log(selectedMagasin)

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
              <button class="btn btn-primary"> <i class="bi bi-pencil-square"></i></button>
              <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
              </td>
              `;
              details.appendChild(row);
            });

      const editBtn = Array.from(document.querySelectorAll(".bi.bi-pencil-square"))
      
      editBtn.forEach(btn=>btn.addEventListener("click",()=>{
      const row =  btn.closest("tr")
      const data = Array.from(row.querySelectorAll("td"))
      const anneeValue = data[0].innerText
      const chiffreValue = data[1].innerText
      const effectifValue = data[2].innerText
      const surfaceValue = data[3].innerText
      console.log("Annee Value:", anneeValue);
console.log("Chiffre_Affaire Value:", chiffreValue);
console.log("Effectif Value:", effectifValue);
console.log("Surface Value:", surfaceValue);
      }))
            
})  

document.getElementById("ajouterModal").addEventListener("submit", (e) => {
  e.preventDefault();
  magasins = localStorage.getItem('localMagasins') ? JSON.parse(localStorage.getItem('localMagasins')) : [];
  const selectedMagasin = magasins.filter(magasin => magasin.nom == magasinNom && magasin.location == magasinLocation).map(magasin => magasin.donnees)[0]
  
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
});



