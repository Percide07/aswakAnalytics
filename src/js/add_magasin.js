const magasins = localStorage.getItem('localMagasins') ? JSON.parse(localStorage.getItem('localMagasins')) : [];

document.getElementById("ajouterMagasin").addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(magasins)
})  