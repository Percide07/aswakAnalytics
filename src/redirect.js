window.addEventListener("DOMContentLoaded",()=>{
    if(!localStorage.getItem("authenticated")) {
        window.location.href = "./login.html"
        return
    }

})
