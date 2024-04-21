document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add_magasin');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let magasins = localStorage.getItem('localMagasins') ? JSON.parse(localStorage.getItem('localMagasins')) : [];

        const date = document.getElementById('DateOuverture').value;
        const ville = document.getElementById('Ville').value;
        const nom = document.getElementById('nom').value;
        const img = document.getElementById('selectedImage').src;

        const magasin = {
            id: magasins.length + 1,
            nom: nom,
            img: img,
            location: ville,
            dateOuverture: date,
        };

      
        magasins.push(magasin);
        localStorage.setItem('localMagasins', JSON.stringify(magasins));

        window.location.href = 'magazin.html';
    });
});
