document.addEventListener("DOMContentLoaded", function() {
  // Reste de votre code JavaScript ici
  const defaultAdmin = {
    email: "Admin@gmail.com",
    password: "admin123"
  };

  localStorage.setItem("Admin", JSON.stringify(defaultAdmin));

  // Function to check if the entered credentials match the default admin credentials
  function checkCredentials(email, password) {
    return email === defaultAdmin.email && password === defaultAdmin.password;
  }

  // Event listener for form submission
  document.querySelector(".container form").addEventListener("submit", function(event) {
    event.preventDefault();  

    // Get the entered email and password
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;

    // Check if the credentials are correct
    if (checkCredentials(email, password)) {
      window.location.href = 'index.html';
      // Redirect to admin dashboard or perform any other action
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  });
});


//Ajout magazin
function formulaire(){
  let date = document.getElementById("DateOuverture").value;
  let ville = document.getElementById("Ville").value;
  let nom = document.getElementById("Nom").value;

 
  let magazins = JSON.parse(localStorage.getItem("Magazins")) || []; // 
  let newMagazin = {
    DateOuverture: date,
    Ville: ville,
    Nom: nom, 
  };
  magazins.push(newMagazin);
  localStorage.setItem("Magazins", JSON.stringify(magazins));
  window.location.reload();
}

let button = document.getElementById("AjouterMagazin");
console.log(localStorage.getItem("Magazins"));

button.addEventListener("click", () => {
  formulaire();
  console.log("buttonClicked");
 
});


//Ajout des informations au Magazin
var magazins = JSON.parse(localStorage.getItem('Magazins'));
/*
let tableau = `
<table>
    <thead>
        <tr class="heading">
            <th>Année</th>
            <th>CA</th>
            <th>Effetifs</th>
            <th>Surface</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
<tbody>
`;

magazins.forEach(magazins => {
    tableau += `
    <tr id="${magazins.id}">
        <td>${magazins.DateOuverture}</td>
        <td>${magazins.Nom}</td>
        <td>${magazins.Ville}</td>
        <td>
            <button class="modifierButton"><i class='bx bx-edit-alt'></i></td>
        <td>    <button class="deleteButton"><i class='bx bx-trash'></i></button>
        </td>
    </tr>`
    ;});

tableau += `
</tbody>
</table>`;


var informations = JSON.parse(localStorage.getItem('Magazins'));
console.log(informations);




function addDetailsToMagazinAtIndex(index, chiffre_Affaire, effictif, surface) {
  const chiffre_Affaireinput = document.getElementById("chiffre_Affaire").value;
  const effictifinput = document.getElementById("effictif").value;
  const surfaceinput = document.getElementById("surface").value;
  let magazins = JSON.parse(localStorage.getItem("Magazins")) || [];
  const copy = magazins[index];
  console.log(copy)
  // Vérifier si l'indice spécifié est valide
  if (index >= 0 && index < magazins.length) {
    // Ajouter les détails pour le magasin à l'indice spécifié
    copy.details = {
      Chiffre_Affaire: chiffre_Affaireinput,
      Effictif: effictifinput,
      Surface: surfaceinput,
    };
    console.log(magazins)
    // Mettre à jour le localStorage avec les magasins mis à jour
    localStorage.setItem("Magazins", JSON.stringify(magazins));
  } else {
    console.error("Index spécifié invalide.");
  }
}

// Récupérer les valeurs des champs d'entrée

// Écouter l'événement click sur le bouton
let button1 = document.getElementById("addData");
button1.addEventListener("click", () => {
  // Ajouter les détails au magasin à l'indice spécifié (ici 0 pour le premier magasin)
  addDetailsToMagazinAtIndex(3, chiffre_Affaire, effictif, surface);
  console.log(chiffre_Affaire);
});
*/