const form = document.getElementById("myForm");
const chiffre = document.getElementById("CA");
const effictif = document.getElementById("effictif");
const surface = document.getElementById("surface");
const submitBtn = document.querySelector(".submit");
const details = document.getElementById("data");
const modal = document.getElementById("userForm");
const modalTitle = document.querySelector("#userForm .modal-title");
const newUserBtn = document.querySelector(".newDetail");

magasins = localStorage.getItem('localMagasins') ? JSON.parse(localStorage.getItem('localMagasins')) : [];
console.log(magasins)
// Get the current URL
const urlParams = new URLSearchParams(window.location.search);

// Get individual parameter values
const magasinNom = urlParams.get('magasin');
const magasinLocation = urlParams.get('location');
console.log(magasinLocation )
console.log(magasinNom )

const selectedMagasin = magasins.filter(magasin => magasin.nom == magasinNom && magasin.location == magasinLocation).map(magasin => magasin.donnees)[0]
const magasinId = magasins.filter(magasin => magasin.nom == magasinNom && magasin.location == magasinLocation)[0].id
console.log(selectedMagasin)

let isEdit = false;
let editId;

showInfo();

newUserBtn.addEventListener('click', () => {
    submitBtn.innerText = 'Submit';
    modalTitle.innerText = "Fill the Form";
    isEdit = false;
    form.reset();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newDetail = {
        CA: chiffre.value,
        effictif: effictif.value,
        surface: surface.value
    };

    getData.push(newDetail);
    localStorage.setItem('magazinsDetails', JSON.stringify(getData));
    showInfo();
});

console.log(selectedMagasin)
function showInfo() {
  // Clear previous details
  details.innerHTML = "";

  selectedMagasin.forEach((donnee, index) => {
    console.log(donnee.annee)
      const row = document.createElement("tr");
      row.innerHTML = `
          
          <td>${donnee.annee}</td>
          <td>${donnee.CA}</td>
          <td>${donnee.effictifs}</td>
          <td>${donnee.surface}</td>
          <td>
              <button class="btn btn-primary" onclick="editInfo(${index}, '${donnee.CA}', '${donnee.effictif}', '${donnee.surface}')" data-bs-toggle="modal" data-bs-target="#userForm"> <i class="bi bi-pencil-square"></i></button>
              <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
          </td>
      `;
      details.appendChild(row);
  });
}
function editInfo(index, Chiffre, Effictif, Surface) {
  isEdit = true;
  editId = index;

  chiffre.value = Chiffre;
  effictif.value = Effictif;
  surface.value = Surface;

  submitBtn.innerText = "Update";
  modalTitle.innerText = "Update The Form";
  submitBtn.removeEventListener('click', submitForm);
  submitBtn.addEventListener('click', updateInfo);
}

function updateInfo() {
  const CAValue = chiffre.value;
  const effictifValue = effictif.value;
  const surfaceValue = surface.value;

  const information = {
    CA: CAValue,
    effictif: effictifValue,
    surface: surfaceValue
  };

  getData[editId] = information;
  localStorage.setItem('magazinsDetails', JSON.stringify(getData));
  form.reset();

  isEdit = false;
  submitBtn.innerText = "Submit";
  modalTitle.innerText = "Fill the Form";
  submitBtn.removeEventListener('click', updateInfo);
  window.location.reload();

  showInfo();
}

function submitForm(event) {
  event.preventDefault();

  const CAValue = chiffre.value;
  const effictifValue = effictif.value;
  const surfaceValue = surface.value;

  const newDetail = {
    CA: CAValue,
    effictif: effictifValue,
    surface: surfaceValue
  };

  getData.push(newDetail);
  
  localStorage.setItem('magazinsDetails', JSON.stringify(getData));
  
  form.reset();
  showInfo();
  
}






// Fonction pour supprimer les détails
function deleteInfo(index) {
  if (confirm("Are you sure want to delete?")) {
      getData.splice(index, 1);
      localStorage.setItem("magazinsDetails", JSON.stringify(getData));
      showInfo();
  }
}
